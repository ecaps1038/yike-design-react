'use client';
import React from 'react';
import Base from './Base';
import type { TitleLevel, TypographyProps } from './interface';

interface TitleProps extends TypographyProps {
  level?: TitleLevel;
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { level = 1, ...rest } = props;
  return (
    <Base
      {...rest}
      ref={ref}
      component={`h${level}`}
    />
  );
});

export default Title;
