import cac from 'cac';
import build from './build';

export const startCommand = async () => {
  const cli = cac('yike-design');

  cli
    .command('build', 'Build module with gulp')
    .option('-b, --bundle', 'Create bundle')
    .action(async ({ bundle }) => {
      await build({ bundle });
    });

  cli.help();
  cli.parse(process.argv, { run: false });
  await cli.runMatchedCommand();
};

startCommand();
