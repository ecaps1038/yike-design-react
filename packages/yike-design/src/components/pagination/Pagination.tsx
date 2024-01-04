'use client';
import type React from 'react';
import { useState, useEffect } from 'react';
import type { PaginationType } from './interface';
// import adjustPagerCount from './utils/adjustPagerCount';
import PageJump from './PageJump';
import PageSize from './PageSize';
import { createCssScope } from '../../utils';
import './style/index';
import { LeftOutlined, RightOutlined, MoreOutlined } from '../../../../yike-design-icon/src/icons';

const Pagination: React.FC<PaginationType> = props => {
  const {
    total,
    simple,
    onChange,
    pageSizeChange,
    pagerCount = 7,
    defaultCurrent = 1,
    disabled = false,
    defaultPageSize = 10,
    showJumper = false,
    showPageSize = false,
    pageSizeOptions = [10, 20, 30, 40, 50],
    pageSize,
    showTotal,
    size = 'm',
  } = props;

  const bem = createCssScope('pagination');

  // total = total == 0 ? 1 : total;

  // 每页多少条数据
  const [currentPageSize, setCurrentPageSize] = useState<number>(pageSize ? pageSize : defaultPageSize);
  // 当前页
  const [currentPage, setCurrentPage] = useState<number>(defaultCurrent);
  // 有关分页的每一项的配置信息
  let paginationArr = new Array(Math.ceil(total / currentPageSize)).fill(0).map((_, index) => {
    return {
      key: index,
      value: index + 1,
      isSelected: index + 1 == defaultCurrent ? true : false,
    };
  });

  // 共有多少页
  const [totalPagination, setTotalPagination] = useState(paginationArr);

  // pagerCount = adjustPagerCount(pagerCount);

  // 分页变化
  useEffect(() => {
    paginationArr = new Array(Math.ceil(total / currentPageSize)).fill(0).map((_, index) => {
      return {
        key: index,
        value: index + 1,
        isSelected: index + 1 == currentPage ? true : false,
      };
    });

    const flag = paginationArr.some((item: any) => item.isSelected === true);
    if (!flag) {
      paginationArr[paginationArr.length - 1].isSelected = true;
      setCurrentPage(paginationArr[paginationArr.length - 1].value);
    }

    setTotalPagination(paginationArr);
  }, [currentPageSize]);

  // 左右箭头是否可点击
  const [isLeftArrowDisabled, setIsLeftArrowDisabled] = useState<boolean>(true);
  const [isRightArrowDisabled, setIsRightArrowDisabled] = useState<boolean>(true);

  // 当前项是第一项或最后一项的时候，禁用左箭头或右箭头
  useEffect(() => {
    totalPagination[0]?.isSelected ? setIsLeftArrowDisabled(true) : setIsLeftArrowDisabled(false);
    totalPagination[totalPagination.length - 1]?.isSelected
      ? setIsRightArrowDisabled(true)
      : setIsRightArrowDisabled(false);
  }, [totalPagination]);

  // 当前页发生变化
  useEffect(() => {
    paginationArr = paginationArr.map(item => {
      item.isSelected = item.value === currentPage ? true : false;
      return item;
    });

    setTotalPagination(paginationArr);
    onChange && onChange(currentPage, defaultPageSize as number);
  }, [currentPage]);

  // 是否隐藏页数
  const isHidePage = (crrentPage: number, pageItem: number, pagerCount: number) => {
    if (pageItem == totalPagination[0].value || pageItem == totalPagination[totalPagination.length - 1].value) {
      return true;
    } else {
      const num = Math.floor((pagerCount - 2) / 2);
      if (Math.abs(crrentPage - pageItem) > num) {
        if (crrentPage < (pagerCount + 1) / 2 && pageItem < pagerCount) {
          return false;
        } else if (
          pageItem > totalPagination[totalPagination.length - 1].value - (pagerCount - 1) &&
          crrentPage >= totalPagination[totalPagination.length - 1].value - (pagerCount - 1) / 2
        ) {
          return false;
        }
        return true;
      }
      return false;
    }
  };

  // 点击左箭头的回调
  const handleChangeCurrentPageGo = () => {
    if (totalPagination[0].isSelected) return;
    setCurrentPage(currentPage - 1);
  };

  // 点击右箭头的回调
  const handleChangeCurrentPageBack = () => {
    if (totalPagination[totalPagination.length - 1].isSelected) return;
    setCurrentPage(currentPage + 1);
  };

  // 点击每一页的回调
  const handleChangeCurrentPage = (e: any) => {
    setCurrentPage(e.value);
  };

  // 点击向左的范围箭头，后退5页
  const handleClickRangeLeftArrow = () => {
    if (currentPage <= 5) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 5);
    }
  };

  // 点击向右的范围箭头，前进5页
  const handleClickRangeRightArrow = () => {
    if (totalPagination[totalPagination.length - 1].value - currentPage <= 5) {
      setCurrentPage(totalPagination[totalPagination.length - 1].value);
    } else {
      setCurrentPage(currentPage + 5);
    }
  };

  // 是否隐藏左侧省略分页
  const isOmittedLeftPaging = () => {
    if (totalPagination.length <= pagerCount) {
      return true;
    } else if (totalPagination.length > pagerCount && currentPage <= (pagerCount + 1) / 2) {
      return true;
    }
    return false;
  };

  // 是否隐藏右侧省略分页
  const isOmittedRightPaging = () => {
    if (totalPagination.length <= pagerCount) {
      return true;
    } else if (
      totalPagination[totalPagination.length - 1].value - currentPage < (pagerCount + 1) / 2 &&
      totalPagination.length > pagerCount
    ) {
      return true;
    }
    return false;
  };

  const handleFileChange = (e: any) => {
    const page = parseInt(e) ? parseInt(e) : 1;
    if (page < 1) {
      setCurrentPage(1);
      return;
    } else if (page > totalPagination[totalPagination.length - 1].value) {
      setCurrentPage(totalPagination[totalPagination.length - 1].value);
      return;
    }
    setCurrentPage(page);
  };

  // 分页发生变化的回调
  const handlePageSize = (size: number) => {
    setCurrentPageSize(size);
  };

  const handleSimpleOnChange = (e: any) => {
    const value = e.target.value;
    setCurrentPage(value);
  };

  const handleSimpleOnBlur = (e: any) => {
    const value = parseInt(e.target.value);
    if (value <= totalPagination.length && value >= 1) {
      setCurrentPage(value);
    } else {
      setCurrentPage(totalPagination.length);
    }
  };

  return (
    <div className={bem({ disabled: disabled })}>
      {showTotal ? <span className={bem('total')}>共 {total} 条</span> : ''}

      <span
        className={bem('item', {
          [`${size}`]: size,
          disabled: isLeftArrowDisabled,
          hover: !isLeftArrowDisabled,
        })}
        onClick={handleChangeCurrentPageGo}
      >
        <LeftOutlined />
      </span>

      {simple ? (
        <div className={bem('simple')}>
          <div
            className={bem('simple__container', {
              [`${size}`]: size,
            })}
          >
            <input
              type="text"
              className={bem('simple__container__input')}
              value={currentPage}
              onChange={handleSimpleOnChange}
              onBlur={handleSimpleOnBlur}
            />
          </div>
          <span className={bem('simple__separator')}> / </span>
          <span className={bem('simple__total')}>{totalPagination.length}</span>
        </div>
      ) : (
        <div className={bem('routine')}>
          {totalPagination.length >= 1 ? (
            <span
              onClick={() => handleChangeCurrentPage(totalPagination[0])}
              className={bem('item', {
                selected: totalPagination[0]?.isSelected,
                hover: !totalPagination[0]?.isSelected,
                [`${size}`]: size,
              })}
            >
              {totalPagination[0].value}
            </span>
          ) : (
            ''
          )}

          <span
            className={bem('item', {
              [`${size}`]: size,
              show: isOmittedLeftPaging(),
            })}
            style={{ backgroundColor: 'transparent' }}
          >
            <span className={bem('item__icon', ['apostrophe'])}>
              <MoreOutlined />
            </span>

            <span className={bem('item__icon', ['arrow'])} onClick={handleClickRangeLeftArrow}>
              <LeftOutlined />
            </span>
          </span>

          {totalPagination.map(item => {
            return (
              <span
                key={item.key}
                onClick={() => handleChangeCurrentPage(item)}
                className={bem('item', {
                  [`${size}`]: size,
                  selected: item?.isSelected,
                  hover: !item?.isSelected,
                  show: isHidePage(currentPage, item.value, pagerCount ? pagerCount : 7),
                })}
              >
                {item.value}
              </span>
            );
          })}

          <span
            className={bem('item', {
              [`${size}`]: size,
              show: isOmittedRightPaging(),
            })}
            style={{ backgroundColor: 'transparent' }}
          >
            <span className={bem('item__icon', ['apostrophe'])}>
              <MoreOutlined />
            </span>

            <span className={bem('item__icon', ['arrow'])} onClick={handleClickRangeRightArrow}>
              <RightOutlined />
            </span>
          </span>

          {totalPagination.length >= 2 ? (
            <span
              onClick={() => handleChangeCurrentPage(totalPagination[totalPagination.length - 1])}
              className={bem('item', {
                [`${size}`]: size,
                selected: totalPagination[totalPagination.length - 1]?.isSelected,
                hover: !totalPagination[totalPagination.length - 1]?.isSelected,
              })}
            >
              {totalPagination[totalPagination.length - 1].value}
            </span>
          ) : (
            ''
          )}
        </div>
      )}

      <span
        className={bem('item', {
          [`${size}`]: size,
          disabled: isRightArrowDisabled,
          hover: !isRightArrowDisabled,
        })}
        onClick={handleChangeCurrentPageBack}
      >
        <RightOutlined />
      </span>

      {!pageSize && showPageSize ? (
        <PageSize
          pageSizeOptions={pageSizeOptions}
          pageSizeChange={pageSizeChange}
          pageSizeEmit={handlePageSize}
          current={currentPage}
          currentPageSize={currentPageSize}
        />
      ) : (
        ''
      )}

      {showJumper ? <PageJump onInputBlur={handleFileChange} /> : ''}
    </div>
  );
};

export default Pagination;
