import type React from 'react';
import type { Size, Type, Shape, Status } from '../../utils/constant';

type ButtonHTMLType = NonNullable<React.ButtonHTMLAttributes<HTMLElement>['type']>;

type OmitButtonHTMLAttributes = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type' | 'onClick'>;

interface ButtonBaseProps {
  disabled: boolean;
  type: Type;
  size: Size;
  shape: Shape;
  status: Status;
  loading: boolean;
  long: boolean;
  icon: React.ReactNode;
  htmlType: ButtonHTMLType;
  onClick: React.MouseEventHandler<HTMLElement>;
}

type NativeButtonProps = ButtonBaseProps & OmitButtonHTMLAttributes;

export type ButtonProps = Partial<NativeButtonProps>;
