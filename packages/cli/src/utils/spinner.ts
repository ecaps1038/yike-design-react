import ora, { oraPromise } from 'ora';
import chalk from 'chalk';
import consola from 'consola';
import type { Options } from 'ora';

const spinner = ora({ color: 'green' });

const promisify = async (
  action: Promise<unknown> | (() => Promise<unknown>),
  options: Options & {
    text: string;
    successText?: string;
    failText?: string;
  }
) => {
  try {
    spinner.start(options.text);
    const promise = typeof action === 'function' ? action() : action;
    await promise;
    spinner.succeed(chalk.green(options.successText) + '\n');
  } catch (error) {
    spinner.fail(chalk.red(options.failText));
    consola.error(error);
    process.exit(1);
  }
};

export default Object.assign({}, spinner, { promisify, oraPromise });
