import path from 'path';
import { rimraf } from 'rimraf';
import bundle from './bundle';
import bundless from './bundless';
import type { BuilderConfig, BundleConfig, BundlessOption } from '@/types/builder';

const DEFAULT_ENTRY = 'src/index.{js,ts,jsx,tsx}';
const DEFAULT_OUTPUT = ['es', 'lib', 'dist'];

const ROOT = process.cwd();

interface NormalizeConfig {
  esm: Required<BundlessOption>;
  cjs: Required<BundlessOption>;
  umd: Required<BundleConfig>;
}

const normalizeConfig = (config: BuilderConfig): NormalizeConfig => {
  const {
    input,
    pattern = '**',
    entry = DEFAULT_ENTRY,
    output = DEFAULT_OUTPUT,
    sourcemap = false,
    targets = {},
    expose,
    filename = 'index',
    minify = false,
    externals = {},
  } = config;

  const esmOutput = path.resolve(ROOT, Array.isArray(output) ? output[0] : output('esm'));
  const cjsOutput = path.resolve(ROOT, Array.isArray(output) ? output[1] : output('cjs'));
  const umdOutput = path.resolve(ROOT, Array.isArray(output) ? output[2] : output('umd'));

  return {
    esm: {
      input,
      pattern,
      output: esmOutput,
      format: 'esm',
      sourcemap,
      targets,
    },
    cjs: {
      input,
      pattern,
      output: cjsOutput,
      format: 'cjs',
      sourcemap,
      targets,
    },
    umd: {
      entry,
      expose,
      filename,
      output: umdOutput,
      minify,
      externals,
      sourcemap,
      targets,
    },
  };
};

export const createBuilder = (config: BuilderConfig) => {
  const { esm, cjs, umd } = normalizeConfig(config);

  const build = async () => {
    await rimraf([esm.output, cjs.output, umd.output]);
    await Promise.all([await bundless(esm), await bundless(cjs), await bundle(umd)]);
  };

  return { build };
};

export const build = (config: BuilderConfig) => {
  const builder = createBuilder(config);
  return builder.build();
};
