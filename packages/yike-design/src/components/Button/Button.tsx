'use client';
import { isFunction, createCssScope } from '../../utils';
import './style/Button.scss';
import type { YkButtonProps } from './utils';

const Button: React.FC<YkButtonProps> = props => {
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
  } = props;

  const bem = createCssScope('button');
  const classname = bem([type, status, shape, size], {
    loading: loading,
    long: long,
    disabled: disabled,
  });

  const handleClick = (ev: React.MouseEvent) => {
    const { onClick } = props;

    if (isFunction(onClick) && !disabled) {
      ev.preventDefault();
      onClick(ev);
    }
  };

  return (
    <button
      disabled={disabled}
      className={classname}
      onClick={handleClick}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
