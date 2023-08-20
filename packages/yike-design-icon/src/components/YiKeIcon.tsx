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
  icon: {
    name: string;
    component: React.ReactElement<React.SVGAttributes<SVGAElement>>;
  };
}

const YiKeIcon = React.forwardRef<HTMLSpanElement, IconComponentProps>((props, ref) => {
  const { className, rotate = 0, icon, style, ...restProps } = props;

  const svgStyle = generateRotateStyle(rotate);

  return (
    <span
      role="img"
      ref={ref}
      {...restProps}
      aria-label={icon.name}
      className={clsx('yk-icon', className)}
      style={{ display: 'inline-flex', ...style }}
    >
      {React.cloneElement(icon.component, { style: svgStyle })}
    </span>
  );
});

export default YiKeIcon;
