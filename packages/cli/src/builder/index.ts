import bundle from './bundle';
import bundless from './bundless';
import { normalizeConfig } from './config';
import type { BuildConfig, BundleConfig, BundlessConfig } from './types';

const build = async (config: BuildConfig) => {
  const builderConfigs = normalizeConfig(config);
  for (const { type, config } of builderConfigs) {
    if (type === 'bundless') {
      await bundless(config as Required<BundlessConfig>);
    } else if (type === 'bundle') {
      await bundle(config as Required<BundleConfig>);
    }
  }
};

const builder = { build };

export default builder;

export * from './types';

export { build, bundle, bundless };
