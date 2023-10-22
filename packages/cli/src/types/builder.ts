import type { Globs } from 'gulp';

type Format = 'esm' | 'cjs' | 'umd';

type BundlessFormat = 'esm' | 'cjs';

type Output = [ESM: string, CJS: string, UMD: string] | ((format: Format) => string);

export interface BaseConfig {
  /**
   * output sourcemap
   * @default false
   */
  sourcemap?: boolean;

  targets?: Record<string, number>;

  /**
   * output path
   */
  output?: string;
}

export interface BundlessOption extends BaseConfig {
  /**
   * src path
   */
  input: string;
  /**
   * glob pattern
   * @default **
   */
  pattern?: Globs;

  /**
   * output format
   */
  format: BundlessFormat;
}

export interface BundleConfig extends BaseConfig {
  /**
   * bundle entry config
   * @default src/index.{js,ts,jsx,tsx}
   */
  entry?: string;

  /**
   * output library name
   */
  expose: string;

  /**
   * bundle output filename
   * @default index
   */
  filename?: string;

  /**
   * minify bundle, minify file name is ${filename}.min.js
   * @default false
   */
  minify?: boolean;

  externals?: Record<string, string>;
}

export type BuilderConfig = Omit<BundlessOption, 'format' | 'output'> &
  Omit<BundleConfig, 'output'> & {
    /**
     * output path
     * @default "esm -> es | cjs -> lib | umd -> dist"
     */
    output?: Output;
  };
