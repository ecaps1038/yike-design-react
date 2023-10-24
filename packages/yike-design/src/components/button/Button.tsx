import type React from 'react';
import type { ButtonProps } from './utils';
import { isFunction, createCssScope } from '../../utils';

const LoadingIcon = (
  <span
    role="img"
    aria-label="loading-outlined"
    className="yk-button-loading-icon"
  >
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      width="1em"
      height="1em"
    >
      <path d="m937.57 371.64-12.03-36.46-72.96 24.04 12.03 36.45A369.98 369.98 0 0 1 883.2 512c0 205-166.2 371.2-371.2 371.2S140.8 717 140.8 512 307 140.8 512 140.8h38.4V64H512C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448c0-48.2-7.63-95.44-22.43-140.36z" />
    </svg>
  </span>
);

const Button: React.FC<ButtonProps> = props => {
  const {
    disabled = false,
    type = 'primary',
    size = 'l',
    status,
    shape,
    loading = false,
    long = false,
    children,
    icon,
    htmlType = 'button',
    ...buttonRestProps
  } = props;

  const bem = createCssScope('button');
  const className = bem([type, status, shape, size], {
    loading: loading,
    long: long,
    disabled: disabled,
  });

  const handleClick = (ev: React.MouseEvent<HTMLElement>) => {
    const { onClick } = props;

    if (isFunction(onClick) && !disabled) {
      ev.preventDefault();
      onClick(ev);
    }
  };

  const buttonProps = {
    disabled,
    className,
    type: htmlType,
    onClick: handleClick,
    ...buttonRestProps,
  };

  return (
    <button {...buttonProps}>
      {loading ? LoadingIcon : icon}
      {children}
    </button>
  );
};

export default Button;
