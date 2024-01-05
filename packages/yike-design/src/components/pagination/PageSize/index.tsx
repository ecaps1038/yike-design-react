import type React from 'react';
import { useEffect, useState, useRef } from 'react';
import { DownOutlined } from '../../../../../yike-design-icon/src/icons';
import { createCssScope } from '../../../utils/bem';
import type { Pagesize } from './type';
import './index.scss';

const PageSize: React.FC<Pagesize> = ({
  pageSizeOptions = [10, 20, 30, 40, 50],
  pageSizeChange,
  current,
  pageSizeEmit,
}) => {
  const [arrowDirection, setArrowDirection] = useState<boolean>(false);

  const pageListRef = useRef<any>(null);

  const sizeButtonRef = useRef<any>(null);

  const [selectPage, setSelectSelectPage] = useState<number>(pageSizeOptions[0]);

  const bem = createCssScope('pagination-pagesize');

  const handleArrowReversal = () => {
    setArrowDirection(!arrowDirection);
  };

  const handleSelectPageSize = (e: number) => {
    setSelectSelectPage(e);
    setArrowDirection(!arrowDirection);
  };

  useEffect(() => {
    pageSizeChange && current && pageSizeChange(selectPage);
    pageSizeEmit && pageSizeEmit(selectPage);
  }, [selectPage]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (arrowDirection) {
        if (
          pageListRef.current &&
          !pageListRef.current.contains(event.target) &&
          !sizeButtonRef.current.contains(event.target)
        ) {
          setArrowDirection(!arrowDirection);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);

    if (arrowDirection) {
      pageListRef.current.style.display = '';
      setTimeout(() => {
        pageListRef.current.classList.add(bem('dropdown--show'));
      }, 0);
    } else {
      pageListRef.current.classList.remove(bem('dropdown--show'));
      setTimeout(() => {
        pageListRef.current.style.display = 'none';
      }, 200);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [arrowDirection]);

  return (
    <div className={bem()}>
      <button className={bem('button')} onClick={handleArrowReversal} ref={sizeButtonRef}>
        <span className={bem('button__title')}>{selectPage} 条/页</span>
        <div className={`${bem('button__icon', { reversal: arrowDirection })}`}>
          <DownOutlined />
        </div>
      </button>

      <div className={bem('dropdown')} style={{ display: 'none' }} ref={pageListRef}>
        {pageSizeOptions.map((num: number, index: number) => {
          return (
            <div className={bem('dropdown__item')} key={index} onClick={() => handleSelectPageSize(num)}>
              {num} 条/页
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageSize;
