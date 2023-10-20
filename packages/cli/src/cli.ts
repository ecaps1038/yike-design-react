import cac from 'cac';
import { version } from '../package.json';

import build from './commands/build';
import create from './commands/create';
import { build as buildComponents } from './commands/components';
import { build as buildIcons, generate as generateIcons } from './commands/icons';

export const startCommand = async () => {
  const cli = cac('yike-design');

  cli.command('build', 'Build module with gulp').action(build);

  cli.command('build:components', 'Build components').action(buildComponents);

  cli.command('create', 'Create a new component').action(create);

  cli.command('generate-icons', 'Generate icons').action(generateIcons);

  cli.command('build-icons', 'Build icon').action(buildIcons);

  cli.version(version);

  cli.help();
  cli.parse(process.argv, { run: false });
  await cli.runMatchedCommand();
};

startCommand();
