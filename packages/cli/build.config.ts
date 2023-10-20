import { resolve } from 'node:path';
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  clean: true,
  failOnWarn: false,
  declaration: true,
  alias: {
    '@': resolve(__dirname, './src'),
  },
  replace: {
    __CLI_ROOT__: JSON.stringify(resolve(__dirname)),
    __PROJECT_ROOT__: JSON.stringify(resolve(__dirname, '../..')),
  },
  entries: ['./src/index', './src/cli'],
});
