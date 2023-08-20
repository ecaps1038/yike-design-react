import cac from 'cac';
import build from './commands/build';
import create from './commands/create';
import { version } from '../package.json';
import buildWithNewBuilder from './commands/builder';
import { build as buildIcons, generate as generateIcons } from './commands/icons';

export const startCommand = async () => {
  const cli = cac('yike-design');

  // cli.command('bundless', 'Build module with bundless').action(async () => {
  //   await builder.build({
  //     esm: {
  //       input: 'src',
  //       sourcemap: true,
  //       dts: true,
  //     },
  //     cjs: {
  //       input: 'src',
  //       sourcemap: true,
  //     },
  //     umd: {
  //       entry: 'src/index.ts',
  //       name: 'YikeDesign',
  //       filename: 'yike-design',
  //       minify: true,
  //     },
  //   });
  // });

  cli
    .command('build', 'Build module with gulp')
    .option('-b, --bundle', 'Create bundle')
    .option('--builder', 'Use new builder')
    .action(async ({ bundle, builder }) => {
      if (builder) {
        await buildWithNewBuilder();
      } else {
        await build({ bundle });
      }
    });

  cli.command('builder', 'Build module with custom builder').action(async () => {
    //
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
