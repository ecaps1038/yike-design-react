import fs from 'node:fs';
import chalk from 'chalk';
import { consola } from 'consola';
import { resolve } from 'node:path';
import { appendFile, mkdir, writeFile } from 'node:fs/promises';

import spinner from '../utils/spinner';
import { ComponentIndex, ComponentScss, ComponentTSX, IndexExport, IndexScss, IndexStyle } from './template';

export default async (component: string) => {
  component = component.charAt(0).toUpperCase() + component.slice(1).toLowerCase();
  const componentDir = resolve(process.cwd(), 'src', 'components', component);
  spinner.start({ text: 'Creating' });
  if (fs.existsSync(componentDir)) {
    spinner.fail({ text: 'Create failed' });
    consola.error('The component has existed');
    process.exit(1);
  }
  const componentStyleDir = resolve(componentDir, 'style');
  try {
    await mkdir(componentStyleDir, { recursive: true });
    await Promise.all([
      writeFile(resolve(componentStyleDir, 'index.scss'), IndexScss.replaceAll('xxxx', component), 'utf-8'),
      writeFile(resolve(componentStyleDir, `${component}.scss`), ComponentScss, 'utf-8'),
      writeFile(resolve(componentStyleDir, 'index.ts'), IndexStyle, 'utf-8'),
      writeFile(resolve(componentDir, `index.tsx`), ComponentIndex.replaceAll('xxxx', component), 'utf-8'),
      writeFile(resolve(componentDir, `${component}.tsx`), ComponentTSX.replaceAll('xxxx', component), 'utf-8'),
      appendFile(resolve(process.cwd(), 'src', 'index.ts'), IndexExport.replaceAll('xxxx', component), 'utf-8'),
    ]);
    spinner.stop({ closeChildProcess: true });
    consola.success(chalk.green('Create successfully'));
  } catch (error) {
    spinner.fail({ text: 'Create failed' });
    consola.error(error);
    process.exit(1);
  }
};
