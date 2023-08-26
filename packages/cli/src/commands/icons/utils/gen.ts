import gulp from 'gulp';
import rename from 'gulp-rename';
import { readFileSync } from 'node:fs';
import { transform } from '@svgr/core';
import template from 'lodash.template';
import { Transform } from 'node:stream';
import kebabcase from 'lodash.kebabcase';
import path, { resolve } from 'node:path';
import capitalize from 'lodash.capitalize';
import { optimize, type Config } from 'svgo';
import type { Config as SvgrConfig } from '@svgr/core';

import { FILE_AUTO_GENERATE_COMMENT } from './define';

const prettierConfig = JSON.parse(readFileSync(resolve(__PROJECT_ROOT__, '.prettierrc'), 'utf-8'));

type SvgrTemplate = SvgrConfig['template'];

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

const svgrTemplate: SvgrTemplate = (variables, { tpl }) => {
  variables.props.forEach(prop => {
    const typeName = prop.typeAnnotation.typeAnnotation.typeName;
    const typeValue = typeName.name;
    typeName.name = `React.` + typeValue;
  });
  return tpl`
${FILE_AUTO_GENERATE_COMMENT}
// for keeping the line
import React from 'react';

${variables.interfaces}

// for keeping the line 

const ${variables.componentName} = React.forwardRef(
  (${variables.props}) => (
    ${variables.jsx}
  )
);

// for keeping the line  
// for keeping the line 
 
export default ${variables.componentName};
`;
};

const transform2TSX = () => {
  return new Transform({
    objectMode: true,
    transform: async (file, _, callback) => {
      const componentName = path.basename(file.basename, '.tsx');
      file.contents = Buffer.from(
        (
          await transform(
            file.contents.toString(),
            {
              plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
              typescript: true,
              jsxRuntime: 'automatic',
              ref: true,
              prettier: true,
              template: svgrTemplate,
              prettierConfig,
            },
            { componentName }
          )
        ).replaceAll('// for keeping the line', '')
      );
      callback(null, file);
    },
  });
};

const iconTemplate = `
${FILE_AUTO_GENERATE_COMMENT}
import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import <%- component %>SVG from './svg/<%- component %>';

const <%- component %> = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="<%- name %>"
      icon={<%- component %>SVG}
    />
  );
});

export default <%- component %>;
`.trimStart();

const iconRender = () => {
  return new Transform({
    objectMode: true,
    transform: (file, _, callback) => {
      const filename = path.basename(file.basename, '.tsx');
      file.contents = Buffer.from(
        template(iconTemplate)({
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
  iconDir: string;
  svgIconDir: string;
  type: IconType;
}

export const generateIcons = (options: GenerateIconsOptions) => {
  const { from, iconDir, type, svgIconDir } = options;
  return src(from)
    .pipe(svgo(svgoOptions))
    .pipe(
      rename(file => {
        file.basename = formatterIconName(file.basename, type);
        file.extname = '.tsx';
      })
    )
    .pipe(transform2TSX())
    .pipe(dest(svgIconDir))
    .pipe(iconRender())
    .pipe(dest(iconDir));
};
