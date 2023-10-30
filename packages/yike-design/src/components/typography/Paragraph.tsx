import React from 'react';
import Base from './Base';
import type { TypographyProps } from './interface';

interface ParagraphProps extends TypographyProps {}

const Paragraph = React.forwardRef<HTMLDivElement, ParagraphProps>((props, ref) => {
  return <Base ref={ref} {...props} component="div" />;
});

export default Paragraph;
