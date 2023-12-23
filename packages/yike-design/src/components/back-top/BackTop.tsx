'use client';
import React from 'react';

import { isWindow } from '../_utils/is';
import BackTopContent from './BackTopContent';
import type { BackTopProps } from './interface';
import { getDefaultContainer } from '../_utils/container';
import useUpdateEffect from '../_utils/hooks/useUpdateEffect';
import { useContainerMemo } from '../_utils/hooks/useContainerMemo';

const BackTop: React.FC<React.PropsWithChildren<BackTopProps>> = props => {
  const {
    style,
    children,
    onClick,
    onChange,
    type = 'primary',
    behavior = 'smooth',
    visibilityHeight = 400,
    target = getDefaultContainer,
  } = props;

  const getTarget = useContainerMemo(target);

  const [visible, setVisible] = React.useState(false);

  const measureVisible = React.useCallback(() => {
    const target = getTarget();
    setVisible(isWindow(target) ? target.scrollY >= visibilityHeight : target.scrollTop >= visibilityHeight);
  }, [visibilityHeight, getTarget]);

  useUpdateEffect(() => {
    onChange?.(visible);
  }, [visible]);

  React.useEffect(() => {
    const target = getTarget();
    target.addEventListener('scroll', measureVisible);
    return () => {
      target.removeEventListener('scroll', measureVisible);
    };
  }, [getTarget, measureVisible]);

  const onBackTopClick = () => {
    const target = getTarget();
    target.scrollTo({
      top: 0,
      behavior,
    });
    onClick?.();
  };

  return (
    // TODO: add visible change animation
    <div className="yk-backtop" style={style} onClick={onBackTopClick}>
      {visible ? children ?? <BackTopContent type={type} /> : null}
    </div>
  );
};

export default BackTop;
