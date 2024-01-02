import type React from 'react';
import { useState } from 'react';
import type { showjump } from './type';
import './index.scss';

const PageJump: React.FC<showjump> = ({ onInputBlur }) => {
  const [inpValue, setInpValue] = useState<string>('');

  const handleInputBlur = (e: any) => {
    if (onInputBlur && inpValue) {
      onInputBlur(e.target.value);
      setInpValue('');
    }
  };

  return (
    <div className="pagination-show-jump">
      <span className="pagination-show-jump-title">前往</span>
      <div className="pagination-show-jump-container">
        <input
          type="text"
          className="pagination-simple-container-input"
          onBlur={handleInputBlur}
          value={inpValue}
          onChange={(e: any) => setInpValue(e.target.value)}
        />
      </div>
      <span className="pagination-show-jump-title">页</span>
    </div>
  );
};

export default PageJump;
