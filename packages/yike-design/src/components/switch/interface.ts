// TODO: add checkedChildren unCheckedChildren onClick
export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  loading?: boolean;
  disabled?: boolean;
  size?: 's' | 'm';
  checkedColor?: string;
  uncheckedColor?: string;
  onChange?: (checked: boolean) => void;
}
