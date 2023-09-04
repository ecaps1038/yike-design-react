'use client';
import type React from 'react';
import classNames from 'classnames';
interface InputProps {
  value: string;
  defaultValue: string;
  allowClear: boolean;
  disabled: boolean;
  readonly: boolean;
  style: React.CSSProperties;
  className: string;
}
function Input(props: InputProps) {
  const { value, className, style } = props;
  return (
    <>
      <input
        style={style}
        className={classNames(className)}
        value={value}
      />
    </>
  );
}

export default Input;
