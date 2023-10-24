import { resolve } from 'path';
import { existsSync } from 'fs';
import { readdir } from 'fs/promises';
import { COMPONENT_DOCS_DIR } from '@/utils/constants';

export const getComponents = async () => {
  return await readdir(COMPONENT_DOCS_DIR, { withFileTypes: true }).then(items => {
    return items.filter(item => item.isFile() && item.name.endsWith('.mdx'));
  });
};

export const getDemos = async (component: string) => {
  const doc = resolve(COMPONENT_DOCS_DIR, `${component}.mdx`);
  if (!existsSync(doc)) {
    throw new Error(`Component ${component} does not exist`);
  }
  const demos = require(`!!@yike-design/mdx-demo/inline-loader!@/content/docs/components/${component}.mdx`);
  return Object.keys(demos).map(key => key);
};

export const getAllDemos = async () => {
  const components = await getComponents();
  const demos = await Promise.all(
    components.map(async component => {
      const demos = await getDemos(component.name.replace('.mdx', ''));
      return demos.map(demo => ({
        component: component.name.replace('.mdx', ''),
        demo,
      }));
    })
  );
  return demos.flat();
};
