/**
 * 调整默认隐藏页数
 * **/
const adjustPagerCount = (pagerCount: number) => {
  if (pagerCount < 3) {
    return 3;
  } else if (pagerCount > 21) {
    return 21;
  }

  if (pagerCount % 2 === 0) {
    return pagerCount + 1;
  }

  return pagerCount;
};

export default adjustPagerCount;
