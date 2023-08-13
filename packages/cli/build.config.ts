import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  clean: true,
  failOnWarn: false,
  declaration: true,
  entries: ['./src/index', './src/cli'],
});
