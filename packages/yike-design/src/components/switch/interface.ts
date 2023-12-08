import type React from 'react';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  loading?: boolean;
  disabled?: boolean;
  size?: 's' | 'm';
  checkedColor?: string;
  uncheckedColor?: string;
  onChange?: (checked: boolean) => void;
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  onClick?: (checked: boolean, e: React.MouseEvent<HTMLButtonElement>) => void;
}
