import { resolve } from 'path';

export const IS_DEV = process.env.NODE_ENV === 'development';

export const COMPONENT_DEMOS_DIR = resolve(process.cwd(), 'src/content/demos');
