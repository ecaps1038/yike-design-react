import os from 'node:os';
import fs from 'node:fs';
import chalk from 'chalk';
import path from 'node:path';
import { rimraf } from 'rimraf';
import { consola } from 'consola';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import { rollup, type OutputOptions } from 'rollup';
import babel from '@rollup/plugin-babel';

import spinner from '../../utils/spinner';
import { entryFile, iconsDir, root } from './utils/define';

const umdOutputOptionsList: OutputOptions[] = [
  {
    globals: {
      react: 'React',
    },
    file: path.resolve(root, 'dist/index.js'),
    name: 'yike_icon',
    format: 'umd',
  },
  {
    globals: {
      react: 'React',
    },
    file: path.resolve(root, 'dist/index.min.js'),
    name: 'yike_icon',
    format: 'umd',
    plugins: [
      terser({
        compress: true,
        keep_classnames: true,
        numWorkers: os.cpus().length,
      }),
    ],
  },
];

export default async () => {
  try {
    consola.info('Start clean the output directory');
    await rimraf(['es', 'cjs', 'dist'].map(item => path.resolve(root, item)));
    consola.success(chalk.green('Clean successfully\n'));
  } catch (error) {
    consola.fail('Clean failed');
    consola.error(error + '\n');
    process.exit(1);
  }

  if (!fs.existsSync(iconsDir)) {
    consola.error(chalk.red('The icons directory does not exist, please generate icons first\n'));
    process.exit(1);
  }

  consola.info('Start building icons');

  await spinner.promisify(
    async () => {
      const bundle = await rollup({
        input: entryFile,
        external: ['react'],
        plugins: [
          resolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
          babel({
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
            ],
            babelHelpers: 'bundled',
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
          }),
        ],
      });
      await Promise.all(umdOutputOptionsList.map(output => bundle.write(output)));
    },
    {
      text: 'Building...',
      failText: 'Build failed',
      successText: 'Build successfully',
    }
  );
};
