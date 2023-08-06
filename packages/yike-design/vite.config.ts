import { join } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '../');

const resolvePath = (str: string) => join(__dirname, str);

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: resolvePath('tsconfig.json'),
      insertTypesEntry: true,
      // outDir: [resolvePath('es'), resolvePath('lib')]
    }),
  ],
  build: {
    outDir: 'lib',
    sourcemap: true,
    minify: false,
    lib: {
      entry: resolvePath('src/index.ts'),
      name: 'yikeDesign',
      formats: ['es', 'umd'],
      fileName: 'yike-design',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
