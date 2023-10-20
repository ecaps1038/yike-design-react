import gulp from 'gulp';
import merge2 from 'merge2';
import type Vinyl from 'vinyl';
import through2 from 'through2';
import type { Globs } from 'gulp';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import type compile from 'gulp-typescript';
import { tsx2js } from './piplines/tsx';
import { scss2css } from './piplines/scss';
import type { CompileModule } from '@/utils/helper';
import { babelify } from './piplines/babel';

const extraStream = (options: { extensions: string[] }) => {
  return through2.obj(function (file: Vinyl, _, nextCallback) {
    if (file.isNull()) {
      return nextCallback();
    }
    const { extensions } = options;
    if (extensions.includes(file.extname)) {
      this.push(file);
    }
    nextCallback();
  });
};

export const createStream = (globs: Globs, destination: string, module: CompileModule, cwd: string) => {
  return new Promise<void>((resolve, reject) => {
    const sourceStream = gulp.src(globs, {
      cwd,
      dot: false,
      allowEmpty: true,
    });

    const style = sourceStream
      .pipe(extraStream({ extensions: ['.css', '.scss'] }))
      .pipe(scss2css())
      .pipe(postcss([autoprefixer({ grid: true })]));

    const { js: esm, dts } = sourceStream
      .pipe(extraStream({ extensions: ['.js', '.ts', '.jsx', '.tsx'] }))
      .pipe<compile.CompileStream>(tsx2js());

    const js = esm.pipe(babelify({ module }));

    const stream = merge2([dts, js, style], {
      pipeError: true,
      objectMode: true,
    }).pipe(gulp.dest(destination));

    stream.on('finish', resolve);
    stream.on('error', reject);
  });
};
