import React from 'react';
import type { YiKeIconProps } from '../types';

const clsx = (...classNames: (string | undefined)[]) => classNames.filter(Boolean).join(' ');

const generateRotateStyle = (rotate?: number) => {
  if (!rotate) return;
  return {
    msTransform: `rotate(${rotate}deg)`,
    transform: `rotate(${rotate}deg)`,
  };
};

interface IconComponentProps extends YiKeIconProps {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>>;
}

const YiKeIcon = React.forwardRef<HTMLSpanElement, IconComponentProps>((props, ref) => {
  const { className, rotate = 0, name, style, icon: Component, svgRef, ...restProps } = props;

  const svgStyle = generateRotateStyle(rotate);

  return (
    <span
      role="img"
      ref={ref}
      {...restProps}
      aria-label={name}
      className={clsx('yk-icon', className)}
      style={{ display: 'inline-flex', ...style }}
    >
      <Component
        ref={svgRef}
        style={svgStyle}
      />
    </span>
  );
});

export default YiKeIcon;
