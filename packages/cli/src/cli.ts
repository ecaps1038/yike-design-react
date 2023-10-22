import cac from 'cac';
import { version } from '../package.json';

import build from './commands/build';
import generate from './commands/generate';
import { generate as generateIcons } from './commands/icons';

export const startCommand = async () => {
  const cli = cac('yike-design');

  cli.command('build', 'Build the project').action(build);

  cli
    .command('generate', 'generate component or document')
    .option('--type [type]', 'the type to generate')
    .action(({ type }) => generate(type));

  cli.command('icons::generate', 'Generate icons').action(generateIcons);

  cli.version(version);

  cli.help();
  cli.parse(process.argv, { run: false });
  await cli.runMatchedCommand();
};

startCommand();
