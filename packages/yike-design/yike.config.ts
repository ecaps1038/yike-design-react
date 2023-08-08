import path from 'node:path';
import { defineBuildConfig } from '@yike-design/cli';

export default defineBuildConfig({
  clean: true,
  entry: [
    `${path.resolve('src/**/*.js')}`,
    `${path.resolve('src/**/*.ts')}`,
    `${path.resolve('src/**/*.tsx')}`,
    `${path.resolve('src/**/*.d.ts')}`,
    `${path.resolve('src/**/*.css')}`,
    `${path.resolve('src/**/*.scss')}`,
    `!${path.resolve('src**/__tests__/**')}`,
  ],
  modules: ['cjs', 'es'],
});
