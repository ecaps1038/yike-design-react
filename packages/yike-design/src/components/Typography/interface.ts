const TITLE_ELE_LIST = [1, 2, 3, 4, 5] as const;

export type TitleLevel = (typeof TITLE_ELE_LIST)[number];

export interface EllipsisConfig {
  rows?: number;
  expandable?: boolean;
  onEllipsis?: (ellipsis: boolean) => void;
  onExpand?: (isExpand: boolean) => void;
}

export type CopyFormat = 'text/plain' | 'text/html';

export interface CopyConfig {
  format?: CopyFormat;
  icon?: [React.ReactNode, React.ReactNode];
  onCopy?: () => void;
}

type TypographyType = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  type?: TypographyType;
  ellipsis?: boolean | EllipsisConfig;
  copyable?: boolean | CopyConfig;

  disabled?: boolean;
  underline?: boolean;
  delete?: boolean;
  strong?: boolean;
  mark?: boolean;
  // italic?: boolean;
  // code?: boolean;
  // keyboard?: boolean;
}
