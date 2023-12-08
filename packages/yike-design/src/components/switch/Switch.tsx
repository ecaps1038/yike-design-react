import React from 'react';

import { createCssScope } from '../../utils';
import type { SwitchProps } from './interface';
import { useMergeState } from '../_utils/hooks/useMergeState';
import useUpdateEffect from '../_utils/hooks/useUpdateEffect';

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  const {
    checked,
    defaultChecked = false,
    disabled = false,
    size = 'm',
    loading = false,
    onChange,
    onClick,
    checkedChildren,
    unCheckedChildren,
    ...restProps
  } = props;

  const [innerChecked, setInnerChecked] = useMergeState(checked, defaultChecked);

  const bem = createCssScope('switch');
  const className = bem([size], {
    disabled,
    loading,
    checked: innerChecked,
  });

  useUpdateEffect(() => {
    onChange?.(innerChecked);
  }, [innerChecked, onChange]);

  const styles = {
    backgroundColor: innerChecked ? restProps.checkedColor : restProps.uncheckedColor,
  };

  const onInnerClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    if (disabled || loading) {
      return;
    }
    setInnerChecked(!innerChecked);
    onClick?.(!innerChecked, e);
  };

  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      style={styles}
      disabled={disabled}
      className={className}
      onClick={onInnerClick}
    >
      <span className={bem('inner')}>{innerChecked ? checkedChildren : unCheckedChildren}</span>
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
