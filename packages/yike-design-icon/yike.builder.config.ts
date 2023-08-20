import { defineBuilderConfig } from '@yike-design/cli';

export default defineBuilderConfig({
  esm: {
    input: 'src',
    sourcemap: true,
    dts: true,
  },
  cjs: {
    input: 'src',
    sourcemap: true,
  },
  umd: {
    entry: 'src/index.ts',
    name: 'YikeDesignIcon',
    filename: 'yike-design-icons',
    minify: true,
  },
});
