import gulp from 'gulp';
import rename from 'gulp-rename';
import { Transform } from 'node:stream';
import { optimize, type Config } from 'svgo';

const { dest, src } = gulp;

export const formatterIconName = (svgFileName: string, suffix: 'Filled' | 'Outlined') => {
  return (
    svgFileName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('') + suffix
  );
};

interface GenerateIconsOptions {
  from: string[];
  to: string;
  filename: (name: string) => string;
}

const svgoOptions: Config = {
  floatPrecision: 2,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    'removeStyleElement',
    'removeScriptElement',
    'removeDimensions',
    'removeXMLNS',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['class', 'style', 'stroke-width', 'stroke-linecap', 'stroke-linejoin'],
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{ fill: 'currentColor' }, { width: '1em' }, { height: '1em' }],
      },
    },
  ],
};

const svgo = (option: Config) => {
  return new Transform({
    objectMode: true,
    transform: (file, _, callback) => {
      file.contents = Buffer.from(optimize(file.contents.toString(), option).data);
      return callback(null, file);
    },
  });
};

export const generateIcons = (options: GenerateIconsOptions) => {
  const { from, to, filename } = options;
  return src(from)
    .pipe(svgo(svgoOptions))
    .pipe(
      rename(file => {
        file.basename = filename(file.basename);
      })
    )
    .pipe(dest(to));
};
