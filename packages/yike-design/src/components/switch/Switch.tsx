import type { switchprops } from './interface';
import { createCssScope } from '../../utils';
import React, { useEffect, useState } from 'react';

const Switch = React.forwardRef<HTMLButtonElement, switchprops>((props, ref) => {
  const {
    disabled = false,
    size = 'm',
    loading = false,
    checkedValue = true,
    uncheckedValue = false,
    value = '',
    onChange,
    ...restProps
  } = props;

  const [currentValue, setCurrentValue] = useState(value);

  const isChecked = currentValue == checkedValue;
  const isDisabled = loading || disabled;

  const bem = createCssScope('switch');
  const className = bem([size], {
    disabled: isDisabled,
    loading,
    checked: isChecked,
  });

  useEffect(() => {
    onChange && onChange(currentValue);
  }, [currentValue, onChange]);

  const styles = {
    backgroundColor: currentValue ? restProps.checkedColor : restProps.uncheckedColor,
  };

  const handleClick = () => {
    if (isDisabled || loading) return;
    setCurrentValue(isChecked ? uncheckedValue : checkedValue);
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      type="button"
      role="switch"
      className={className}
      disabled={disabled}
      style={styles}
    >
      <span className="yk-switch-dot">
        {loading && (
          <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50" />
          </svg>
        )}
      </span>
    </button>
  );
});

export default Switch;
