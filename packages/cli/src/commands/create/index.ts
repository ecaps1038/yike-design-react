import fs from 'node:fs';
import inquirer from 'inquirer';
import { consola } from 'consola';
import { resolve } from 'node:path';
import { appendFile, mkdir, writeFile } from 'node:fs/promises';
import spinner from '../../utils/spinner';
import { ComponentIndex, ComponentScss, ComponentTSX, IndexExport, IndexScss } from './template';

export default async () => {
  const { name } = await inquirer.prompt({ name: 'name', message: 'Please input the component name: ' });

  if (!/[a-zA-Z-]/g.test(name)) {
    consola.error('Component name should only contain letters and hyphens');
    process.exit(1);
  }
  const camelCaseName = name.replace(/-(\w)/g, (_: string, letter: string) => {
    return letter.toUpperCase();
  });
  const component = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);

  const componentDir = resolve(process.cwd(), 'src', 'components', component);

  consola.info(`Start create the component：${component}`);
  if (fs.existsSync(componentDir)) {
    consola.error('The component has existed');
    process.exit(1);
  }
  const componentStyleDir = resolve(componentDir, 'style');

  await spinner.promisify(
    async () => {
      await mkdir(componentStyleDir, { recursive: true });
      await Promise.all([
        writeFile(resolve(componentStyleDir, 'index.scss'), IndexScss.replaceAll('xxxx', component), 'utf-8'),
        writeFile(resolve(componentStyleDir, `${component}.scss`), ComponentScss, 'utf-8'),
        writeFile(resolve(componentDir, `index.ts`), ComponentIndex.replaceAll('xxxx', component), 'utf-8'),
        writeFile(resolve(componentDir, `${component}.tsx`), ComponentTSX.replaceAll('xxxx', component), 'utf-8'),
        appendFile(resolve(process.cwd(), 'src', 'index.ts'), IndexExport.replaceAll('xxxx', component), 'utf-8'),
      ]);
    },
    {
      text: 'Creating...',
      failText: 'Create failed',
      successText: 'Create successfully',
    }
  );
};
