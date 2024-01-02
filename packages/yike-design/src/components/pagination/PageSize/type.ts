type Pagesize = {
  pageSizeOptions?: number[];
  pageSizeChange?: (size: number) => void;
  current?: number;
  pageSizeEmit: (size: number) => void;
  currentPageSize: number;
};

export type { Pagesize };
