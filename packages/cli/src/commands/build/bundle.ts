import os from 'node:os';
import fs from 'node:fs';
import path from 'node:path';
import { rollup } from 'rollup';
import { consola } from 'consola';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export const generateBundle = async (dest: string) => {
  const modules = fs.readdirSync(dest).filter(module => ['es', 'cjs'].includes(module));

  if (!modules.length) {
    consola.warn('Not found es or cjs, generate bundle will be skipped');
    return Promise.resolve();
  }

  let [defaultModule] = modules;

  if (modules.includes('cjs')) {
    defaultModule = 'cjs';
  }
  const entry = path.resolve(dest, defaultModule, 'index.js');

  const bundle = await rollup({
    input: entry,
    external: ['react', 'react-dom'],
    plugins: [
      commonjs(),
      postcss({
        extract: true,
        minimize: true,
        sourceMap: true,
      }),
      resolve({ extensions: ['.js'], exportConditions: ['node'] }),
    ],
  });

  await bundle.write({
    sourcemap: true,
    compact: true,
    file: path.join(dest, 'yike.umd.js'),
    format: 'umd',
    name: 'yike',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    exports: 'named',
    plugins: [
      terser({
        compress: true,
        keep_classnames: true,
        numWorkers: os.cpus().length,
      }),
    ],
  });

  await bundle.close();
};
