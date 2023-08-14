import chalk from 'chalk';
import fs from 'node:fs';
import path from 'node:path';
import { consola } from 'consola';
import spinner from '../utils/spinner';
import { readdir, writeFile } from 'node:fs/promises';
import { rollup, type OutputOptions } from 'rollup';
import svgr from '@svgr/rollup';
import typescript from '@rollup/plugin-typescript';
import { rimraf } from 'rimraf';

const formatterIconName = (svgFileName: string) => {
  return svgFileName
    .replace(/\.svg$/, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

const root = path.resolve(process.cwd());

const exportFile = path.resolve(root, 'index.tsx');

const iconsDir = path.resolve(root, 'icons');

const filledIconDir = path.resolve(iconsDir, 'fill');
const outlinedIconDir = path.resolve(iconsDir, 'outline');

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
  const outDirs = ['es', 'cjs', 'dist'].map(item => path.resolve(root, item)).filter(dir => fs.existsSync(dir));

  if (outDirs.length) {
    consola.info('Start clean the output directory');
    try {
      await rimraf(outDirs);
      consola.success(chalk.green('Clean successfully\n'));
    } catch (error) {
      consola.fail('Clean failed');
      consola.error(error + '\n');
      process.exit(1);
    }
  }

  if (!fs.existsSync(filledIconDir) || !fs.existsSync(outlinedIconDir)) {
    consola.error(chalk.red('The icons directory does not exist'));
    process.exit(1);
  }

  consola.info('Start generating icons export file');

  await spinner.promisify(
    async () => {
      const filledIcons = await readdir(filledIconDir);
      const outlinedIcons = await readdir(outlinedIconDir);

      const filledIconsExport = filledIcons
        .map(icon => `export { default as ${formatterIconName(icon)}Filled } from './icons/fill/${icon}';`)
        .join('\n');

      const outlinedIconsExport = outlinedIcons
        .map(icon => `export { default as ${formatterIconName(icon)}Outlined } from './icons/outline/${icon}';`)
        .join('\n');

      const content = ['// filled icons', filledIconsExport, '', '// outlined icons', outlinedIconsExport].join('\n');

      await writeFile(exportFile, content, 'utf-8');
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
        input: exportFile,
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

  try {
    await rimraf(exportFile);
    consola.success(chalk.green('Clean temp export file successfully\n'));
  } catch (error) {
    consola.fail('Clean temp export file failed');
    consola.error(error + '\n');
  }
};
