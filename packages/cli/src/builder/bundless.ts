import chalk from 'chalk';
import path from 'node:path';
import consola from 'consola';
import { createStream } from './stream';
import type { BundlessOption } from '@/types/builder';

const bundless = async (option: Required<BundlessOption>) => {
  const { input, pattern, format, output } = option;

  const root = process.cwd();

  const src = path.resolve(root, input);

  const patterns = Array.isArray(pattern) ? pattern : [pattern];

  consola.log(
    `Bundless from ${chalk.yellow(path.relative(process.cwd(), input))} [${patterns
      .map(pattern => chalk.gray(pattern))
      .join(', ')}] to ${chalk.yellow(path.relative(process.cwd(), output))}`
  );
  await createStream(patterns, output, format, src);
};

export default bundless;
