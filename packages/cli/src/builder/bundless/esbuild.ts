import path from 'node:path';
import esbuild from 'esbuild';

const BUNDLESS_EXTS = ['.js', '.jsx', '.ts', '.tsx'];

interface EsbuildTransformerOptions {
  file: string;
  outdir: string;
  format: 'esm' | 'cjs';
  sourcemap: boolean;
  targets: Record<string, number>;
}

interface EsbuildTransformerResult {
  content: string;
  map?: string;
  ext: string;
}

type Nullable<T> = T | null;

const esbuildTransformer = async (options: EsbuildTransformerOptions): Promise<Nullable<EsbuildTransformerResult>> => {
  if (!BUNDLESS_EXTS.includes(path.extname(options.file))) {
    return null;
  }
  const { file, outdir, format, sourcemap, targets } = options;
  const { outputFiles } = await esbuild.build({
    entryPoints: [file],
    format,
    outdir,
    write: false,
    sourcemap,
    jsx: 'automatic',
    target: Object.entries(targets).map(([key, value]) => `${key}${value}`),
  });
  if (outputFiles.length === 2) {
    const [map, result] = outputFiles;
    return {
      map: map.text,
      ext: path.extname(result.path),
      content: result.text,
    };
  }
  return {
    content: outputFiles[0].text,
    ext: path.extname(outputFiles[0].path),
  };
};

export default esbuildTransformer;
