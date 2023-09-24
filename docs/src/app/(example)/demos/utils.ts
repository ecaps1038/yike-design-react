import { resolve } from 'path';
import { existsSync } from 'fs';
import { readdir } from 'fs/promises';
import { COMPONENT_DEMOS_DIR } from '@/utils/constants';

export const getComponents = async () => {
  return (await readdir(COMPONENT_DEMOS_DIR, { withFileTypes: true })).filter(item => item.isDirectory());
};

export const getDemos = async (component: string) => {
  const demoPath = resolve(COMPONENT_DEMOS_DIR, component);
  if (!existsSync(demoPath)) {
    throw new Error(`Component ${component} does not exist`);
  }
  return (await readdir(demoPath, { withFileTypes: true })).filter(item => item.isFile());
};
