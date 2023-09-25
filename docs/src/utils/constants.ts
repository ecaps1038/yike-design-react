import { resolve } from 'path';

export const IS_DEV = process.env.NODE_ENV === 'development';

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const COMPONENT_DEMOS_DIR = resolve(process.cwd(), 'src/content/demos');

export const DOCS_DIR = resolve(process.cwd(), 'src/content/docs');
