import type React from 'react';
import { useState } from 'react';
import type { showjump } from './type';
import { createCssScope } from '../../../utils/bem';
import './index.scss';

const PageJump: React.FC<showjump> = ({ onInputBlur }) => {
  const [inpValue, setInpValue] = useState<string>('');

  const bem = createCssScope('pagination-pagejump');

  const handleInputBlur = (e: any) => {
    if (onInputBlur && inpValue) {
      onInputBlur(e.target.value);
      setInpValue('');
    }
  };

  return (
    <div className={bem()}>
      <span className={bem('title')}>前往</span>
      <div className={bem('container')}>
        <input
          type="text"
          value={inpValue}
          className={bem('container__input')}
          onBlur={handleInputBlur}
          onChange={(e: any) => setInpValue(e.target.value)}
        />
      </div>
      <span className={bem('title')}>页</span>
    </div>
  );
};

export default PageJump;
