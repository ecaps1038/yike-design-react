export interface BaseConfig {
  /**
   * output sourcemap
   * @default false
   */
  sourcemap?: boolean;

  targets?: Record<string, number>;
}

export interface BundleConfig extends BaseConfig {
  /**
   * output library name
   */
  name?: string;
  /**
   * bundle entry config
   * @default src/index.{js,ts,jsx,tsx}
   */
  entry?: string;

  /**
   * bundle output path
   * @default dist/umd
   */
  output?: string;

  /**
   * bundle output filename
   * @default index.js
   */
  filename?: string;

  /**
   * minify bundle, minify file name is ${filename}.min.js
   * @default false
   */
  minify?: boolean;

  externals?: Record<string, string>;
}

export interface BundlessConfig extends BaseConfig {
  /**
   * source code directory
   * @default src
   */
  input: string;

  /**
   * output dts file
   * @default false
   */
  dts?: boolean;

  /**
   * output directory
   * @default dist/esm or dist/cjs
   */
  output?: string;

  /**
   * output format
   */
  format: 'esm' | 'cjs';
}

export interface BuilderConfig {
  type: 'bundle' | 'bundless';
  config: BundleConfig | Required<BundlessConfig>;
}

export interface BuildConfig {
  esm?: Omit<BundlessConfig, 'format'>;
  cjs?: Omit<BundlessConfig, 'format'>;
  umd?: BundleConfig;
}
