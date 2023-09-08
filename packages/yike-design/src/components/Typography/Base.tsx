'use client';
import React, { useState } from 'react';
import Ellipsis from './Ellipsis';
import { createCssScope } from '../../utils';
import ResizeObserver from '../_utils/ResizeObserver';

const TITLE_ELE_LIST = [1, 2, 3, 4, 5] as const;

interface EllipsisProps {
  rows?: number;
  expandable?: boolean;
}

interface BaseProps {
  type: 'title' | 'paragraph' | 'text';
  heading?: (typeof TITLE_ELE_LIST)[number];
  blockquote?: boolean;
  ellipsis?: boolean | EllipsisProps;
}

type TextElements = 'blockquote' | 'div' | `h${(typeof TITLE_ELE_LIST)[number]}` | 'span';

const defaultEllipsisConfig = {
  rows: 1,
  expandable: false,
  suffix: '...',
  symbol: 'more',
  onExpand: () => {},
  onCollapse: () => {},
};

const Base = (props: React.PropsWithChildren<BaseProps>) => {
  const { type, blockquote = false, heading = 1, ellipsis = false, children } = props;

  let TextComponent: TextElements = 'div';
  if (type === 'paragraph') {
    TextComponent = blockquote ? 'blockquote' : 'div';
  } else if (type === 'title') {
    TextComponent = `h${heading}`;
  } else if (type === 'text') {
    TextComponent = ellipsis ? 'div' : 'span';
  } else {
    // warn('Invalid type');
  }

  const ellipsisConfig =
    typeof ellipsis === 'boolean' ? defaultEllipsisConfig : { ...defaultEllipsisConfig, ...ellipsis };

  const enableEllipsis = !!ellipsis;

  const enableJSEllipsis = enableEllipsis && ellipsisConfig.expandable;

  const enableCssEllipsis = enableEllipsis && !enableJSEllipsis;

  const { rows } = ellipsisConfig;

  const [width, setWidth] = React.useState(0);

  const bem = createCssScope('typography');

  const onResize = (width: number) => {
    setWidth(width);
  };

  const [expand, setExpand] = useState(false);

  const renderOperationNode = () => {
    return (
      <span
        onClick={() => setExpand(!expand)}
        style={{ cursor: 'pointer', userSelect: 'none' }}
      >
        {expand ? '折叠' : '展开'}
      </span>
    );
  };

  const renderMeasureNode = (node: React.ReactNode) => {
    return (
      <React.Fragment>
        {node}
        ...
        {renderOperationNode()}
      </React.Fragment>
    );
  };

  return (
    <ResizeObserver<HTMLElement>
      onResize={onResize}
      enable={ellipsisConfig.expandable}
    >
      {ref => (
        <TextComponent
          // @ts-expect-error TODO: fix this type definition（too complex）
          ref={ref}
          style={{
            WebkitLineClamp: enableCssEllipsis && rows > 1 ? rows : undefined,
          }}
          className={bem({
            ellipsis: enableCssEllipsis,
            'ellipsis-single-line': enableCssEllipsis && rows === 1,
            'ellipsis-multiple-line': enableCssEllipsis && rows > 1,
          })}
        >
          {enableJSEllipsis ? (
            <Ellipsis
              rows={rows}
              width={width}
              text={children}
              renderMeasureNode={renderMeasureNode}
            />
          ) : (
            children
          )}
        </TextComponent>
      )}
    </ResizeObserver>
  );
};

export default Base;
