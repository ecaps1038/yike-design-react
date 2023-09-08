import React from 'react';
import Base from './Base';

const TITLE_ELE_LIST = [1, 2, 3, 4, 5] as const;

interface TitleProps {
  level?: (typeof TITLE_ELE_LIST)[number];
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(props => {
  const { level = 1 } = props;
  return (
    <Base
      type="title"
      heading={level}
    />
  );
});

export default Title;
