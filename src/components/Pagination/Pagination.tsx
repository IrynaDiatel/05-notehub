import type { ComponentType } from "react";
import ReactPaginateModule from "react-paginate";
import type { ReactPaginateProps } from "react-paginate";
import styles from "./Pagination.module.css";

type ModuleWithDefault<T> = { default: T };

const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<
    ComponentType<ReactPaginateProps>
  >
).default;

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedPage: number) => void;
}

export default function Pagination({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    if (newPage !== currentPage) {
      onPageChange(newPage);
    }
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={handlePageChange}
      forcePage={currentPage - 1}
      containerClassName={styles.pagination}
      activeClassName={styles.active}
      nextLabel="→"
      previousLabel="←"
      breakLabel="..."
    />
  );
}