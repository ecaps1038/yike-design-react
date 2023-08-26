import path from 'node:path';
import type { BaseConfig, BuildConfig, BuilderConfig, BundleConfig, BundlessConfig } from './types';

const DEFAULT_TARGETS: NonNullable<BaseConfig['targets']> = {
  chrome: 58,
};

const ESM_DEFAULT_CONFIG: Required<BundlessConfig> = {
  input: 'src',
  dts: false,
  output: 'dist/esm',
  sourcemap: false,
  format: 'esm',
  targets: DEFAULT_TARGETS,
};

const CJS_DEFAULT_CONFIG: Required<BundlessConfig> = {
  input: 'src',
  dts: false,
  output: 'dist/cjs',
  sourcemap: false,
  format: 'cjs',
  targets: DEFAULT_TARGETS,
};

const UMD_DEFAULT_CONFIG: Required<BundleConfig> = {
  name: 'index',
  entry: 'src/index.{js,ts,jsx,tsx}',
  output: 'dist/umd',
  filename: 'index',
  minify: false,
  sourcemap: false,
  targets: DEFAULT_TARGETS,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};

const normalizeBundlessConfig = (
  config: Omit<BundlessConfig, 'format'>,
  defaultConfig: Required<BundlessConfig>
): Required<BundlessConfig> => {
  const fullConfig = { ...defaultConfig, ...config };
  const { input, output } = fullConfig;
  return {
    ...fullConfig,
    input: path.isAbsolute(input) ? input : path.resolve(input),
    output: path.isAbsolute(output) ? output : path.resolve(output),
  };
};

const normalizeBundleConfig = (config: BundleConfig) => {
  const fullConfig = { ...UMD_DEFAULT_CONFIG, ...config };
  const { entry, output } = fullConfig;
  return {
    ...fullConfig,
    externals: Object.assign({}, config.externals ?? {}, UMD_DEFAULT_CONFIG.externals),
    entry: path.isAbsolute(entry) ? entry : path.resolve(entry),
    output: path.isAbsolute(output) ? output : path.resolve(output),
  };
};

export const normalizeConfig = (config: BuildConfig): BuilderConfig[] => {
  const configs: BuilderConfig[] = [];

  const { esm, cjs, umd } = config;

  if (esm) {
    configs.push({
      type: 'bundless',
      config: normalizeBundlessConfig(esm, ESM_DEFAULT_CONFIG),
    });
  }

  if (cjs) {
    configs.push({
      type: 'bundless',
      config: normalizeBundlessConfig(cjs, CJS_DEFAULT_CONFIG),
    });
  }

  if (umd) {
    configs.push({
      type: 'bundle',
      config: normalizeBundleConfig(umd),
    });
  }

  return configs;
};
