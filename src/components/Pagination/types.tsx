interface PaginationProps {
  currentPage: number;
  total: number;
  limitPerPage?: number;
  className?: string;
  clickHandler: (val: number) => void;
}

export type { PaginationProps };
