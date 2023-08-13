import type React from 'react';
import type { Size, Type, Shape, Status } from '../../utils/constant';
import { isFunction } from '../../utils/helper';
import { createCssScope } from '../../utils/bem';
import './style/Button.scss';

interface YkButtonProps {
  disabled?: boolean;
  type?: Type;
  size?: Size;
  shape?: Shape;
  status?: Status;
  loading?: boolean;
  long?: boolean;
  children: React.ReactNode;

  onClick: React.MouseEventHandler;
}

const Button: React.FC<YkButtonProps> = props => {
  const {
    disabled = false,
    type = 'primary',
    size = 'l',
    status = 'primary',
    shape,
    loading = false,
    long = false,
    children,
  } = props;

  const bem = createCssScope('button');
  const classname = bem([type, status, shape, size], {
    loading: loading,
    long: long,
    disabled: disabled,
  });

  const handleClick = (ev: React.MouseEvent) => {
    const { onClick } = props;

    if (isFunction(onClick)) {
      ev.preventDefault();
      onClick(ev);
    }
  };

  return (
    <button
      className={classname}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
