import chalk from 'chalk';
import fs from 'node:fs';
import path from 'node:path';
import { rimraf } from 'rimraf';
import svgr from '@svgr/rollup';
import { consola } from 'consola';
import typescript from '@rollup/plugin-typescript';
import { rollup, type OutputOptions } from 'rollup';
import { readdir, writeFile } from 'node:fs/promises';

import spinner from '../utils/spinner';
import { filledSvgDir, inlineSvgDir, outlinedSvgDir, root } from './utils/define';

const entry = path.resolve(root, 'index.ts');

const comment = `// This icon export file is generated automatically.`;

const outputOptionsList: OutputOptions[] = [
  {
    sourcemap: true,
    file: path.resolve(root, 'es/index.js'),
    format: 'es',
  },
  {
    sourcemap: true,
    file: path.resolve(root, 'cjs/index.js'),
    format: 'cjs',
  },
  {
    sourcemap: true,
    globals: {
      react: 'React',
    },
    file: path.resolve(root, 'dist/index.js'),
    name: 'yike_icons',
    format: 'umd',
  },
];

export default async () => {
  try {
    consola.info('Start clean the output directory');
    await rimraf(['es', 'cjs', 'dist'].map(item => path.resolve(root, item)));
    consola.success(chalk.green('Clean successfully\n'));

    consola.info('Start clean the entry');
    await rimraf(entry);
    consola.success(chalk.green('Clean successfully\n'));
  } catch (error) {
    consola.fail('Clean failed');
    consola.error(error + '\n');
    process.exit(1);
  }

  if (!fs.existsSync(inlineSvgDir)) {
    consola.error(chalk.red('The inline-svg directory does not exist, please generate icons first\n'));
    process.exit(1);
  }

  consola.info('Start generating icons export file');

  await spinner.promisify(
    async () => {
      const filledIcons = await readdir(filledSvgDir);
      const outlinedIcons = await readdir(outlinedSvgDir);

      const filledIconsExport = filledIcons
        .map(icon => `export { default as ${path.basename(icon, '.svg')} } from './inline-svg/filled/${icon}';`)
        .join('\n');

      const outlinedIconsExport = outlinedIcons
        .map(icon => `export { default as ${path.basename(icon, '.svg')} } from './inline-svg/outlined/${icon}';`)
        .join('\n');

      const allIconExport = [comment, filledIconsExport, outlinedIconsExport].join('\n');

      await Promise.all([writeFile(entry, allIconExport, 'utf-8')]);
    },
    {
      text: 'Generating...',
      failText: 'Generate failed',
      successText: 'Generate successfully',
    }
  );

  consola.info('Start building icons');

  await spinner.promisify(
    async () => {
      const bundle = await rollup({
        input: entry,
        external: ['react', 'react-dom'],
        plugins: [
          svgr(),
          typescript({
            declaration: true,
            declarationDir: '',
          }),
        ],
      });

      for (const outputOptions of outputOptionsList) {
        await bundle.write(outputOptions);
      }
    },
    {
      text: 'Building...',
      failText: 'Build failed',
      successText: 'Build successfully',
    }
  );
};
