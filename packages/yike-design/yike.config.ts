import { defineBuildConfig } from '@yike-design/cli';

export default defineBuildConfig({
  input: 'src',
  pattern: ['**/*.@(j|t)s{,x}', '**/*.d.ts', '**/*.scss', '!**/__test__/*', '!bundle.ts'],
  entry: 'src/bundle.ts',
  output: ['dist/es', 'dist/cjs', 'dist'],
  minify: true,
  filename: 'yike-design',
  expose: 'yikeDesign',
  sourcemap: true,
  targets: {
    chrome: 58,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
});
