import * as t from '@babel/types';
import { parse } from '@babel/parser';
import traverseExports from '@babel/traverse';
import generatorExports from '@babel/generator';

// @ts-expect-error
const traverse = traverseExports.default as typeof traverseExports;

// @ts-expect-error
const generator = generatorExports.default as typeof generatorExports;

export class ExportError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TransformCodeError';
  }
}

const transformCode = (code: string) => {
  const ast = parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });

  let hasDefaultExport = false;

  let componentName = 'App';

  let defaultExportError = false;

  traverse(ast, {
    ImportDeclaration(path) {
      path.remove();
    },
    ExportDefaultDeclaration(path) {
      hasDefaultExport = true;
      const declaration = path.get('declaration');
      if (declaration.isFunctionDeclaration()) {
        if (declaration.node.id?.name) {
          componentName = declaration.node.id.name;
        } else {
          declaration.node.id = t.identifier(componentName);
        }
        path.replaceWith(declaration);
      } else if (declaration.isArrowFunctionExpression()) {
        // @ts-expect-error
        declaration.node.id = t.identifier(componentName);
        const variableDeclaration = t.variableDeclaration('const', [
          t.variableDeclarator(t.identifier(componentName), declaration.node),
        ]);
        path.replaceWith(variableDeclaration);
      } else if (declaration.isIdentifier()) {
        const binding = path.scope.getBinding(declaration.node.name);
        if (!binding) {
          defaultExportError = true;
          return;
        }
        const node = binding.path.node;
        if (t.isFunctionDeclaration(node)) {
          if (node.id?.name) {
            componentName = node.id.name;
          } else {
            defaultExportError = true;
          }
        } else if (t.isVariableDeclarator(node) && t.isArrowFunctionExpression(node.init)) {
          // @ts-expect-error
          componentName = node.id.name;
        }
        path.remove();
      } else {
        defaultExportError = true;
      }
    },
  });

  if (!hasDefaultExport) {
    throw new ExportError('no default export');
  } else if (defaultExportError) {
    throw new ExportError('default export error');
  }

  const output = generator(ast, {}, code);

  output.code += `\nrender(<${componentName} />)`;

  return output.code;
};

export default function (code: string): [null | Error, string] {
  try {
    return [null, transformCode(code)];
  } catch (error) {
    return [error instanceof ExportError ? error : new Error('parsed error', { cause: error }), ''];
  }
}
