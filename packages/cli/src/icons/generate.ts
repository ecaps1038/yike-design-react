import chalk from 'chalk';
import merge2 from 'merge2';
import path from 'node:path';
import consola from 'consola';
import { rimraf } from 'rimraf';

import spinner from '../utils/spinner';
import { inlineSvgDir, svgDir } from './utils/define';
import { formatterIconName, generateIcons } from './utils/generateIcons';

export default async () => {
  try {
    consola.info('Start clean the inline-svg directory');
    await rimraf(inlineSvgDir);
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
        to: path.resolve(inlineSvgDir, 'filled'),
        filename: name => formatterIconName(name, 'Filled'),
      }),
      // Generate outlined icons
      generateIcons({
        from: [path.resolve(svgDir, 'outline/*.svg')],
        to: path.resolve(inlineSvgDir, 'outlined'),
        filename: name => formatterIconName(name, 'Outlined'),
      }),
    ],
    {
      pipeError: true,
      objectMode: true,
    }
  );

  // return new Promise((resolve, reject) => {
  //   stream.on('finish', resolve);
  //   stream.on('error', reject);
  // });

  await spinner.promisify(
    async () =>
      new Promise((resolve, reject) => {
        stream.on('finish', resolve);
        stream.on('error', reject);
      }),
    {
      text: 'Generating...',
      failText: 'Generate failed',
      successText: 'Generate successfully',
    }
  );
};
