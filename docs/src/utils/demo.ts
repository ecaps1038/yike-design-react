import assert from 'assert';
import { build } from 'esbuild';
import { readFileSync } from 'fs';
import enhancedResolve from 'enhanced-resolve';
import { basename, dirname, extname, relative } from 'path';

const resolver = enhancedResolve.create.sync({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  alias: {},
});

interface Dependency {
  filename: string;
  path: string;
  source: string;
  language: string;
  type: 'NPM' | 'file';
  importPath: string;
}

interface DemoAsset {
  filename: string;
  path: string;
  source: string;
  language: string;
  dependencies: Dependency[];
}

export const parseDemoAsset = async (entry: string, entrySource?: string) => {
  const asset: DemoAsset = {
    filename: basename(entry),
    path: entry,
    source: entrySource ?? '',
    language: extname(entry).slice(1),
    dependencies: [],
  };

  const absWorkingDir = dirname(entry);

  await build({
    write: false,
    bundle: true,
    format: 'esm',
    target: 'esnext',
    entryPoints: [entry],
    absWorkingDir,
    external: ['react', 'react-dom'],
    plugins: [
      {
        name: 'deps',
        setup(builder) {
          builder.onResolve({ filter: /.*/ }, args => {
            if (args.kind === 'entry-point') {
              return {
                path: entry,
                pluginData: { kind: args.kind },
              };
            }
            const resolved = resolver(args.resolveDir, args.path);
            assert(resolved, `Can't resolve ${args.path} from ${args.resolveDir}`);
            if (!args.path.startsWith('.')) {
              asset.dependencies.push({
                filename: args.path,
                importPath: args.path,
                type: 'NPM',
                source: '',
                path: resolved,
                language: 'js',
              });
              // make all deps external
              return { path: args.path, external: true };
            } else {
              const relativePath = relative(absWorkingDir, resolved);
              asset.dependencies.push({
                filename: basename(resolved),
                importPath: relativePath.startsWith('.') ? relativePath : `./${relativePath}`,
                type: 'file',
                source: '',
                language: extname(resolved).slice(1),
                path: resolved,
              });
            }
            return {
              path: resolved,
              pluginData: { kind: args.kind },
            };
          });
          builder.onLoad({ filter: /.*/ }, args => {
            const ext = extname(args.path);
            const isModule = ['.js', '.jsx', '.ts', '.tsx'].includes(ext);
            const isPlainText = ['.css', '.less', '.sass', '.scss', '.styl', '.json'].includes(ext);
            const isEntryPoint = args.pluginData.kind === 'entry-point';
            if (isModule || isPlainText) {
              if (entrySource && isEntryPoint) {
                return {
                  contents: entrySource,
                  loader: ext.slice(1),
                };
              }

              const source = readFileSync(args.path, 'utf-8');

              if (isEntryPoint) {
                asset.source = source.trim();
              } else {
                const dep = asset.dependencies.find(dep => dep.path === args.path);
                if (dep) {
                  dep.source = source;
                }
              }

              return {
                // only continue to load for module files
                contents: source,
                loader: isModule ? (ext.slice(1) as any) : 'text',
              };
            }
          });
        },
      },
    ],
  });

  return asset;
};
