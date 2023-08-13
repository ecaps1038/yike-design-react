import fs from 'node:fs';
import { consola } from 'consola';
import { resolve } from 'node:path';
import { appendFile, mkdir, writeFile } from 'node:fs/promises';
import spinner from '../utils/spinner';
import { ComponentIndex, ComponentScss, ComponentTSX, IndexExport, IndexScss, IndexStyle } from './template';

export default async (component: string) => {
  component = component.charAt(0).toUpperCase() + component.slice(1).toLowerCase();
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
        writeFile(resolve(componentStyleDir, 'index.ts'), IndexStyle, 'utf-8'),
        writeFile(resolve(componentDir, `index.tsx`), ComponentIndex.replaceAll('xxxx', component), 'utf-8'),
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
