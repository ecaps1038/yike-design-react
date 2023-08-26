import chalk from 'chalk';
import merge2 from 'merge2';
import consola from 'consola';
import { rimraf } from 'rimraf';
import path, { basename } from 'node:path';
import { writeFile } from 'node:fs/promises';

import spinner from '../../utils/spinner';
import { generateIcons } from './utils/gen';
import { FILE_AUTO_GENERATE_COMMENT, exportFile, iconsDir, svgDir } from './utils/define';
import template from 'lodash.template';
import { readdirSync } from 'node:fs';

const SVGIconDir = path.resolve(iconsDir, 'svg');

const exportTemplate = `
${FILE_AUTO_GENERATE_COMMENT}
<% for( let index = 0; index < files.length; index++ ) { %>
export { default as  <%- files[index] %> } from './<%- files[index] %>';
<% } %>
`.trimStart();

export default async () => {
  try {
    consola.info('Start clean the icons directory');
    await rimraf(iconsDir);
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
        svgIconDir: SVGIconDir,
        iconDir: iconsDir,
        type: 'filled',
      }),
      // Generate outlined icons
      generateIcons({
        from: [path.resolve(svgDir, 'outline/*.svg')],
        svgIconDir: SVGIconDir,
        iconDir: iconsDir,
        type: 'outlined',
      }),
    ],
    {
      pipeError: true,
      objectMode: true,
    }
  );

  await spinner.promisify(
    async () => {
      await new Promise((resolve, reject) => {
        stream.on('finish', resolve);
        stream.on('error', reject);
      });
      await writeFile(
        exportFile,
        template(exportTemplate)({
          files: readdirSync(iconsDir)
            .filter(item => !item.startsWith('svg'))
            .map(item => basename(item, '.tsx')),
        }),
        'utf-8'
      );
    },
    {
      text: 'Generating...',
      failText: 'Generate failed',
      successText: 'Generate successfully',
    }
  );
};
