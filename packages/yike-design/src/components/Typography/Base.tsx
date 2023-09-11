'use client';
import React from 'react';
import Ellipsis from './Ellipsis';
import { createCssScope } from '../../utils';
import composeRef from '../_utils/composeRef';
import ResizeObserver from '../_utils/ResizeObserver';
import type { EllipsisProps, TitleLevel, TypographyProps } from './interface';

type TextElements = 'blockquote' | 'div' | `h${TitleLevel}` | 'span';

interface BaseProps extends TypographyProps {
  component: TextElements;
}

const NOOP = () => {};

const defaultEllipsisConfig: Required<EllipsisProps> = {
  rows: 1,
  expandable: false,
  onEllipsis: NOOP,
  onExpand: NOOP,
};

const ellipsisStr = '...';

const Base = React.forwardRef<HTMLElement, React.PropsWithChildren<BaseProps>>((props, ref) => {
  const { component: Component, ellipsis = false, children } = props;

  const ellipsisConfig =
    typeof ellipsis === 'boolean' ? defaultEllipsisConfig : { ...defaultEllipsisConfig, ...ellipsis };

  const enableEllipsis = !!ellipsis;

  const enableJSEllipsis = enableEllipsis && ellipsisConfig.expandable;

  const enableCssEllipsis = enableEllipsis && !enableJSEllipsis;

  const { rows } = ellipsisConfig;

  const [width, setWidth] = React.useState(0);

  const bem = createCssScope('typography');

  const onResize = React.useCallback((width: number) => {
    setWidth(width);
  }, []);

  // current expanding state
  const [expanding, setExpanding] = React.useState(false);

  const renderOperationNode = () => {
    const onExpandClick = () => {
      setExpanding(!expanding);
      ellipsisConfig.onExpand(true);
    };
    return (
      <span
        onClick={onExpandClick}
        className={bem('ellipsis-operation-expand')}
      >
        {expanding ? '折叠' : '展开'}
      </span>
    );
  };

  const renderMeasureNode = (node: React.ReactNode, isEllipsis: boolean) => {
    return (
      <React.Fragment>
        {node}
        {isEllipsis && !expanding && ellipsisStr}
        {isEllipsis && renderOperationNode()}
      </React.Fragment>
    );
  };

  return (
    <ResizeObserver<HTMLElement>
      onResize={onResize}
      enable={enableEllipsis}
    >
      {resizeRef => (
        <Component
          // @ts-expect-error TODO: fix there type definition
          ref={composeRef(resizeRef, ref)}
          style={{
            WebkitLineClamp: enableCssEllipsis && rows > 1 ? rows : undefined,
          }}
          className={bem({
            ellipsis: enableCssEllipsis,
            'ellipsis-single-line': enableCssEllipsis && rows === 1,
            'ellipsis-multiple-line': enableCssEllipsis && rows > 1,
          })}
        >
          {enableEllipsis ? (
            <Ellipsis
              rows={rows}
              width={width}
              text={children}
              expanding={expanding}
              enableJSEllipsis={enableJSEllipsis}
              renderMeasureNode={renderMeasureNode}
              onEllipsis={ellipsisConfig.onEllipsis}
            />
          ) : (
            children
          )}
        </Component>
      )}
    </ResizeObserver>
  );
});

export default Base;
