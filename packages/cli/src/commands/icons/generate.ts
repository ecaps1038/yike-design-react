import chalk from 'chalk';
import merge2 from 'merge2';
import path, { basename } from 'node:path';
import consola from 'consola';
import { rimraf } from 'rimraf';
import { readdir, writeFile } from 'node:fs/promises';

import { exportTemplate } from './template/icon.ejs';
import { generateIcons } from './utils/generateIcons';
import { exportFile, iconsDir, svgDir } from './utils/define';
import ejs from 'ejs';

export default async () => {
  try {
    consola.info('Start clean the icons directory');
    await rimraf(iconsDir);
    consola.success(chalk.green('Clean successfully\n'));
  } catch (error) {
    consola.fail('Clean failed');
    consola.error(error + '\n');
    process.exit(1);
  }

  consola.info('Start generating icons');

  const stream = merge2(
    [
      // Generate filled icons
      generateIcons({
        from: [path.resolve(svgDir, 'fill/*.svg')],
        to: iconsDir,
        type: 'filled',
      }),
      // Generate outlined icons
      generateIcons({
        from: [path.resolve(svgDir, 'outline/*.svg')],
        to: iconsDir,
        type: 'outlined',
      }),
    ],
    {
      pipeError: true,
      objectMode: true,
    }
  );

  await new Promise((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
  await writeFile(
    exportFile,
    ejs.render(exportTemplate, { files: (await readdir(iconsDir)).map(item => basename(item, '.tsx')) }),
    'utf-8'
  );

  // await spinner.promisify(
  //   async () => {
  //     await new Promise((resolve, reject) => {
  //       stream.on('finish', resolve);
  //       stream.on('error', reject);
  //     });
  //     await writeFile(
  //       exportFile,
  //       ejs.render(exportTemplate, { files: (await readdir(iconsDir)).map(item => basename(item, '.tsx')) }),
  //       'utf-8'
  //     );
  //   },
  //   {
  //     text: 'Generating...',
  //     failText: 'Generate failed',
  //     successText: 'Generate successfully',
  //   }
  // );
};
