import type React from 'react';

export interface YiKeIconProps extends React.HTMLProps<HTMLSpanElement> {
  className?: string;
  rotate?: number;
  svgRef?: React.Ref<SVGSVGElement>;
}
