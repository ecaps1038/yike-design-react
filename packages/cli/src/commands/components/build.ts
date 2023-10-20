import { build } from '@/builder';
import type { BuildConfig } from '@/types';
import { loadConfig } from '@/utils/loadConfig';

export default async () => {
  const config = loadConfig<BuildConfig>('yike.config');
  await build(config);
};
