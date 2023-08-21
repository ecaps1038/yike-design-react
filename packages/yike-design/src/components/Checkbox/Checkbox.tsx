'use client';

import React from 'react';

import './style/Checkbox.scss';

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;

  onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<
  CheckboxProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof CheckboxProps>
> = props => {
  const {
    children,
    checked,
    indeterminate = false,
    onChange,

    // rest
    ...restProps
  } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    evt => {
      const { checked } = evt.target;

      if (typeof onChange === 'function') {
        onChange(checked);
      }
    },
    [onChange]
  );

  React.useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div className="yk-checkbox">
      <label>
        <input
          ref={inputRef}
          {...restProps}
          type="checkbox"
          onChange={handleChange}
          {...(checked != null ? { checked } : {})}
        />
        <span className="yk-checkbox_content">{children}</span>
      </label>
    </div>
  );
};

export default Checkbox;
