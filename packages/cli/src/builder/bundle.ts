import os from 'node:os';
import chalk from 'chalk';
import path from 'node:path';
import { rollup } from 'rollup';
import { consola } from 'consola';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

import type { BundleConfig } from '@/types/builder';

interface RollupBuildOptions {
  input: string;
  globals: Record<string, string>;
  targets: Record<string, number>;
  output: {
    dir: string;
    filename: string;
    exportName: string;
    sourcemap: boolean;
  };
}

const createRollupBuild = (options: RollupBuildOptions) => {
  const { input, globals, output, targets } = options;

  const { exportName, sourcemap, dir, filename } = output;
  return async (minify = false) => {
    const file = path.resolve(dir, minify ? `${filename}.min.js` : `${filename}.js`);

    consola.log(
      `Bundle from ${chalk.yellow(path.relative(process.cwd(), input))} to ${chalk.yellow(
        path.relative(process.cwd(), file)
      )} ${minify ? chalk.gray('(minified)') : ''}`
    );

    const bundle = await rollup({
      input,
      external: Object.keys(globals),
      // to ignore "use client" directive
      // https://github.com/TanStack/query/pull/5161#issuecomment-1476840472
      onwarn(warning, handler) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.frame?.includes(`use client`)) {
          return;
        }
        handler(warning);
      },
      plugins: [
        resolve({
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        }),
        postcss({
          extract: true,
          minimize: minify,
          sourceMap: sourcemap,
          exec: true, // Enable PostCSS Parser support in CSS-in-JS.
          extensions: ['.css', '.scss'],
        }),
        babel({
          presets: [['@babel/preset-env', { targets }], '@babel/preset-react', '@babel/preset-typescript'],
          babelHelpers: 'bundled',
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        }),
      ],
    });

    await bundle.write({
      name: exportName,
      sourcemap,
      globals,
      format: 'umd',
      file,
      plugins: [
        minify &&
          terser({
            compress: true,
            keep_classnames: true,
            numWorkers: os.cpus().length - 1,
          }),
      ],
    });
  };
};

const bundle = async (config: Required<BundleConfig>) => {
  const { entry, output, targets, filename, expose, sourcemap, externals, minify } = config;

  const build = createRollupBuild({
    input: entry,
    globals: externals,
    targets,
    output: { dir: output, filename, exportName: expose, sourcemap },
  });

  const buildTasks = minify ? [build(), build(true)] : [build()];

  await Promise.all(buildTasks);
};

export default bundle;
