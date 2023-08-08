import type Vinyl from 'vinyl';
import through2 from 'through2';
import { consola } from 'consola';
import sass, { type Options as SassOptions } from 'sass';

type ScssConfig = SassOptions<'sync'>;

export const scss2css = (
  config: ScssConfig = {
    style: 'expanded',
    alertColor: true,
  }
) => {
  return through2.obj(function (file: Vinyl, _, nextCallback) {
    if (file.isNull()) {
      return nextCallback();
    }

    if (file.extname !== '.scss' || file.basename.startsWith('_')) {
      return nextCallback(null, file);
    }

    const fileContent = file.contents?.toString();
    if (!fileContent?.length) {
      consola.warn(`${file.relative} is empty`);

      file.path = file.path.replace(file.extname, '.css');
      return nextCallback(null, file);
    }

    try {
      const result = sass.compile(file.path, config);

      // transform url("*.scss") to "*.css"
      const css = result.css.replace(/@import\s+url\((.*?)\);?/g, (_, importUrl) => {
        const filepath = importUrl.replace(file.extname, '.css');
        return `@import ${filepath};`;
      });

      file.contents = Buffer.from(css, 'utf8');
      file.path = file.path.replace(file.extname, '.css');
      if (file.stat) {
        file.stat.atime = file.stat.mtime = file.stat.ctime = new Date();
      }
      nextCallback(null, file);
    } catch (error) {
      consola.error(`${file.relative}\n${error}`);
      this.emit('error', error);
    }
  });
};
