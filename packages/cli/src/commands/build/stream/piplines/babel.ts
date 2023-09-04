import { defu } from 'defu';
import babel from 'gulp-babel';
import { type PackageJson } from 'types-package-json';
import { readConfig, type CompileModule } from '../../../../utils/helper';

type BabelConfig = Parameters<typeof babel>[number];

interface PackageConfig extends PackageJson {
  babel?: BabelConfig;
  browserslist?: string | Array<string>;
}

const getBabelConfig = (module: CompileModule) => {
  const { browserslist, dependencies, babel: babelConfig } = readConfig<PackageConfig>('package.json');

  const defaultConfig = {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          bugfixes: true,
          modules: module !== 'es' && module,
          targets: browserslist ?? ['> 0.25%, not dead'],
        },
      ],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
    ],
    plugins: [
      '@babel/plugin-proposal-object-rest-spread',
      ['@babel/plugin-transform-runtime', { version: dependencies?.['@babel/runtime'] }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
  };
  return defu(babelConfig, defaultConfig) as BabelConfig;
};

export type BabelifyOptions = { module: CompileModule };

export const babelify = ({ module }: BabelifyOptions) => {
  return babel(getBabelConfig(module));
};
