const TITLE_ELE_LIST = [1, 2, 3, 4, 5] as const;

export type TitleLevel = (typeof TITLE_ELE_LIST)[number];

export interface EllipsisProps {
  rows?: number;
  expandable?: boolean;
  onEllipsis?: (ellipsis: boolean) => void;
  onExpand?: (isExpand: boolean) => void;
}

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  ellipsis?: boolean | EllipsisProps;
  // ... other shared props
}
