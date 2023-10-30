import React from 'react';
import Base from './Base';
import type { TypographyProps } from './interface';

interface TextProps extends TypographyProps {}

const Text = React.forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  return <Base ref={ref} {...props} component="span" />;
});

export default Text;
