import chalk from 'chalk';
import path from 'node:path';
import ts from 'typescript';
import { consola } from 'consola';
import { getTsconfig } from './utils';

// this file heavily referenced to father bundless dts implementation
// https://github.com/umijs/father/blob/master/src/builder/bundless/dts/index.ts

interface DeclarationResult {
  fileName: string;
  content: string;
  sourceFile: string;
}

const getDeclarations = async (files: string[], cwd: string) => {
  const declarationResult: DeclarationResult[] = [];

  const tsconfig = getTsconfig(cwd);

  if (!tsconfig) {
    return declarationResult;
  }

  if (tsconfig.errors.length) {
    throw new Error(
      `Error parsing tsconfig.json content: ${chalk.redBright(
        ts.flattenDiagnosticMessageText(tsconfig.errors[0].messageText, '\n')
      )}`
    );
  } else if (tsconfig.options.declaration && tsconfig.options.noEmit === true) {
    console.warn('tsconfig.json `noEmit` is true, will not emit declaration files!');
    return [];
  }

  const host = ts.createCompilerHost(tsconfig.options, true);

  host.writeFile = (fileName, content, _a, _b, sourceFiles) => {
    const sourceFile = sourceFiles?.[0].fileName;
    if (sourceFile) {
      declarationResult.push({
        fileName,
        content,
        sourceFile,
      });
    }
  };

  const program = ts.createProgram({ rootNames: files, options: tsconfig.options, host });

  // compile just emit declaration files
  const emitResult = program.emit(undefined, undefined, undefined, true);

  // handler compile error
  if (emitResult.diagnostics.length) {
    emitResult.diagnostics.forEach(d => {
      const loc = ts.getLineAndCharacterOfPosition(d.file!, d.start!);
      const rltPath = path.relative(cwd, d.file!.fileName);
      const errMsg = ts.flattenDiagnosticMessageText(d.messageText, '\n');

      consola.error(
        `${chalk.blueBright(rltPath)}:${
          // correct line number & column number, ref: https://github.com/microsoft/TypeScript/blob/93f2d2b9a1b2f8861b49d76bb5e58f6e9f2b56ee/src/compiler/tracing.ts#L185
          `${chalk.yellow(loc.line + 1)}:${chalk.yellow(loc.character + 1)}`
        } - ${chalk.gray(`TS${d.code}:`)} ${errMsg}`
      );
    });
    throw new Error('Declaration generation failed.');
  }

  return declarationResult;
};

export default getDeclarations;
