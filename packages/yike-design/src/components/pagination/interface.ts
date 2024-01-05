export const Size = ['s', 'm', 'l', 'xl'] as const;
type Size = (typeof Size)[number];

export type Change = (current: number) => void;
export type PageSizeChange = (pageSize: number) => void;

type CascaderProps = {
  total: number; // 共有多少页
  current?: number; // 当前是第几页
  defaultCurrent?: number; // 默认当前页数
  pageSize?: number; // 每页条数
  defaultPageSize?: number; // 默认的每页条数
  disabled?: boolean; // 禁用分页
  fixWidth?: boolean; // 宽度
  pagerCount?: number; // 最大显示页码数量
  pageSizeOptions?: number[]; // 指定每页可以显示多少条
  simple?: boolean; // 简洁模式
  showJumper?: boolean; // 跳转页面
  showTotal?: boolean; // 显示共有多少数据
  showPageSize?: boolean; // 显示分页选择
  size?: Size; // 当为 s 时，是小尺寸分页
};

type PaginationEmits = {
  onChange?: (page: number, pageSize: number) => void;
  pageSizeChange?: (size: number) => void;
};

export type PaginationType = CascaderProps & PaginationEmits;
