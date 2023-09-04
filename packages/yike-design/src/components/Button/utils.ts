import type React from 'react';
import type { Size, Type, Shape, Status } from '../../utils/constant';

export interface YkButtonProps {
  disabled?: boolean;
  type?: Type;
  size?: Size;
  shape?: Shape;
  status?: Status;
  loading?: boolean;
  long?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;

  onClick?: React.MouseEventHandler;
}
