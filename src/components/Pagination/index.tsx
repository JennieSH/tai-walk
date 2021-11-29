import { StyledPagination } from "./styles";
import { PaginationProps } from "./types";
import Icon from "@/components/Icon";

const count = 5;

const Pagination = ({
  currentPage,
  total,
  limitPerPage = 20,
  className,
  clickHandler
}: PaginationProps) => {
  const maxPage = Math.ceil(total / limitPerPage);

  const pageHandler = (page: number) => {
    if (page <= 0 || page > maxPage) return;
    clickHandler(page);
  };

  const getPageList = () => {
    const prefix = Math.floor(count / 2);

    // totalPage < count
    // 1/3 => [1,2,3]
    if (maxPage <= count) return Array.from({ length: maxPage }, (_, index) => index + 1);

    // totalPage > count
    // 1. 2/6 => [1,2,3,4,5]
    if (currentPage - prefix <= 1) return Array.from({ length: count }, (_, index) => index + 1);

    // 2. 8/10 => [6,7,8,9,10]
    if (currentPage + prefix >= maxPage)
      return Array.from({ length: count }, (_, index) => maxPage - count + index + 1);

    // 3. 5/10 => [3,4,5,6,7]
    return Array.from({ length: count }, (_, index) => currentPage - prefix + index);
  };

  return (
    <StyledPagination className={className}>
      <button
        className={currentPage === 1 ? "pagination-btn disabled" : "pagination-btn"}
        onClick={() => pageHandler(currentPage - 1)}
      >
        <Icon name="page-left" className="pagination-icon" />
      </button>
      <ul className="pagination-list">
        {getPageList().map(page => (
          <li
            key={page}
            className={page === currentPage ? "pagination-page active" : "pagination-page"}
            onClick={() => pageHandler(page)}
          >
            {page}
          </li>
        ))}
      </ul>
      <button
        className={currentPage >= maxPage ? "pagination-btn disabled" : "pagination-btn"}
        onClick={() => pageHandler(currentPage + 1)}
      >
        <Icon name="page-right" className="pagination-icon" />
      </button>
    </StyledPagination>
  );
};

export default Pagination;
