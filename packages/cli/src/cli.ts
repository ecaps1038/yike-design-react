import cac from 'cac';
import build from './build';
import create from './create';
import { build as buildIcons, generate as generateIcons } from './icons';
import { version } from '../package.json';

export const startCommand = async () => {
  const cli = cac('yike-design');

  cli
    .command('build', 'Build module with gulp')
    .option('-b, --bundle', 'Create bundle')
    .action(async ({ bundle }) => {
      await build({ bundle });
    });

  cli.command('create', 'Create a new component').action(create);

  cli.command('generate-icons', 'Generate icons').action(generateIcons);

  cli.command('build-icons', 'Build icon').action(buildIcons);

  cli.version(version);

  cli.help();
  cli.parse(process.argv, { run: false });
  await cli.runMatchedCommand();
};

startCommand();
