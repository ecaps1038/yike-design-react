import { defineBuildConfig } from '@yike-design/cli';

export default defineBuildConfig({
  input: 'src',
  entry: 'src/index.ts',
  expose: 'yikeDesignIcons',
  filename: 'yike-design-icons',
  minify: true,
  output: ['dist/es', 'dist/cjs', 'dist'],
  sourcemap: true,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
});
