import type React from 'react';
import type { ContainerType } from '../_types';

export type BackTopType = 'primary' | 'secondary';

export interface BackTopProps {
  type?: BackTopType;
  behavior?: ScrollBehavior;
  style?: React.CSSProperties;
  visibilityHeight?: number;
  target?: ContainerType;
  onClick?: () => void;
  onChange?: (visible: boolean) => void;
}
