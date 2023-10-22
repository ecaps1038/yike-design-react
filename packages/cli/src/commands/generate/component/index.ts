import fs from 'node:fs';
import consola from 'consola';
import inquirer from 'inquirer';
import { resolve } from 'node:path';
import { appendFile, mkdir, writeFile } from 'node:fs/promises';
import capitalize from 'lodash.capitalize';

import spinner from '@/utils/spinner';
import { ComponentIndex, ComponentTSX, GlobalIndex, GlobalStyle, IndexScss, StyleIndex } from './template';

export default async () => {
  const prompt = await inquirer.prompt({
    name: 'name',
    message: 'Please input the component name: ',
  });

  const component = prompt.name.trim() as string;

  if (!component) {
    throw new Error('please input component name');
  } else if (!/^[a-z]+(-[a-z]+)*$/g.test(component)) {
    throw new Error('component name should only contain letters and hyphens');
  }

  const root = resolve(__PROJECT_ROOT__, 'packages/yike-design');

  const sourceDir = resolve(root, 'src');

  const componentDir = resolve(sourceDir, 'components', component);

  if (fs.existsSync(componentDir)) {
    throw new Error(`The component ${component} has existed`);
  }

  const styleDir = resolve(componentDir, 'style');

  const componentName = component
    .split('-')
    .map(item => capitalize(item))
    .join('');

  consola.info(`Start create the component: ${component}`);

  await spinner.promisify(
    async () => {
      await mkdir(styleDir, { recursive: true });
      await Promise.all([
        writeFile(resolve(styleDir, 'index.ts'), StyleIndex, 'utf-8'),
        writeFile(resolve(styleDir, 'index.scss'), IndexScss.replaceAll('xxxx', componentName), 'utf-8'),
        writeFile(resolve(componentDir, `index.ts`), ComponentIndex.replaceAll('xxxx', componentName), 'utf-8'),
        writeFile(
          resolve(componentDir, `${componentName}.tsx`),
          ComponentTSX.replaceAll('xxxx', componentName),
          'utf-8'
        ),
        appendFile(resolve(sourceDir, 'index.ts'), GlobalIndex.replaceAll('xxxx', component), 'utf-8'),
        appendFile(resolve(sourceDir, 'styles', 'index.ts'), GlobalStyle.replaceAll('xxxx', component), 'utf-8'),
      ]);
    },
    {
      text: 'Creating...',
      failText: 'Create failed',
      successText: 'Create successfully',
    }
  );
};
