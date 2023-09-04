import type { BuildConfig } from '../../builder';
import builder from '../../builder';
import { loadConfig } from '../../utils/loadConfig';

export default async () => {
  const builderConfig = loadConfig<BuildConfig>('yike.builder.config');
  await builder.build(builderConfig);
};
