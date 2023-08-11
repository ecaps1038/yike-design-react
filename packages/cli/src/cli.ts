import cac from 'cac';
import build from './build';
import create from './create';

export const startCommand = async () => {
  const cli = cac('yike-design');

  cli
    .command('build', 'Build module with gulp')
    .option('-b, --bundle', 'Create bundle')
    .action(async ({ bundle }) => {
      await build({ bundle });
    });

  cli.command('create <component>', 'Create a new component').action(async (component: string) => {
    await create(component);
  });

  cli.help();
  cli.parse(process.argv, { run: false });
  await cli.runMatchedCommand();
};

startCommand();
