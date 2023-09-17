'use client';
import React from 'react';
import Base from './Base';
import { createCssScope } from '../../utils';
import type { TitleLevel, TypographyProps } from './interface';

interface TitleProps extends Omit<TypographyProps, 'strong'> {
  level?: TitleLevel;
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { level = 1, ...rest } = props;
  const bem = createCssScope('title');
  return (
    <Base
      {...rest}
      ref={ref}
      className={bem()}
      component={`h${level}`}
    />
  );
});

export default Title;
