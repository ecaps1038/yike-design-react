import fs from 'node:fs';
import chalk from 'chalk';
import path from 'node:path';
import { rimraf } from 'rimraf';
import { consola } from 'consola';
import spinner from '../utils/spinner';
import { createStream } from './stream';
import { loadConfig, type BuildConfig } from '../utils/loadConfig';
import { generateBundle } from './bundle';

export type BuildOptions = {
  bundle?: boolean;
};

const withSpinner = <T extends any[]>(func: (...args: T) => Promise<any>, closeFlag?: boolean, ...args: T) => {
  spinner.start({ text: 'Building' });

  return func(...args)
    .then(() => {
      spinner.stop({ closeChildProcess: closeFlag });
      consola.success(chalk.green('Build successfully'));
    })
    .catch(error => {
      spinner.fail({ text: 'Build failed' });
      consola.error(error);
      process.exit(1);
    });
};

export default async ({ bundle }: BuildOptions) => {
  const { entry, output = 'dist', clean = false, modules = ['es'] } = loadConfig<BuildConfig>();

  const destination = path.isAbsolute(output) ? output : path.resolve(output);

  if (clean && fs.existsSync(output)) {
    consola.info('Clean the output directory');
    try {
      await rimraf(output);
      consola.success(chalk.green('Clean successfully\n'));
    } catch (error) {
      consola.fail('Clean failed');
      consola.error(error + '\n');
    }
  }
  consola.info(`Start build the modules：${chalk.green(modules.join('、'))}`);
  spinner.start({ text: 'Being build...' });

  await withSpinner(() => {
    return Promise.all(
      modules.map(module => {
        const dist = path.join(destination, module);
        return createStream(entry, dist, module);
      })
    );
  }, false);

  if (bundle) {
    consola.log('');
    consola.info('Start generate the bundle');
    await withSpinner(generateBundle, true, destination);
  }
};
