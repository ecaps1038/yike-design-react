import ejs from 'ejs';
import gulp from 'gulp';
import rename from 'gulp-rename';
import { Transform } from 'node:stream';
import kebabcase from 'lodash.kebabcase';
import capitalize from 'lodash.capitalize';
import { optimize, type Config } from 'svgo';
import { iconTemplate } from '../template/icon.ejs';

const { dest, src } = gulp;

type IconType = 'filled' | 'outlined';

export const formatterIconName = (svgFileName: string, suffix: IconType) => {
  return svgFileName
    .split('-')
    .map(word => capitalize(word))
    .concat(capitalize(suffix))
    .join('');
};

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

const iconRender = () => {
  return new Transform({
    objectMode: true,
    transform: (file, _, callback) => {
      const filename = file.basename.split('.')[0];
      file.contents = Buffer.from(
        ejs.render(iconTemplate, {
          svg: file.contents.toString(),
          name: kebabcase(filename),
          component: filename,
        })
      );
      return callback(null, file);
    },
  });
};

interface GenerateIconsOptions {
  from: string[];
  to: string;
  type: IconType;
}

export const generateIcons = (options: GenerateIconsOptions) => {
  const { from, to, type } = options;
  return src(from)
    .pipe(svgo(svgoOptions))
    .pipe(
      rename(file => {
        file.basename = formatterIconName(file.basename, type);
        file.extname = '.tsx';
      })
    )
    .pipe(iconRender())
    .pipe(dest(to));
};
