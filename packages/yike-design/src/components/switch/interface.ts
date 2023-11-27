export interface SwitchProps {
  value?: boolean | string | number;
  size?: 's' | 'm';
  loading?: boolean;
  disabled?: boolean;
  checkedValue?: boolean | string | number;
  uncheckedValue?: boolean | string | number;
  checkedColor?: string;
  uncheckedColor?: string;
  onChange?: (value: boolean | string | number) => void;
}
