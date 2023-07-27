import {FC} from "react";
import styles from './Pagination.module.scss';
import cn from 'clsx'

interface IPagination {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<IPagination> = ({totalPages, currentPage, onPageChange}) => {
  const pageNumbers = [];

  let startPage: number;
  let endPage: number;
  if (totalPages <= 10) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 6) {
      startPage = 1;
      endPage = 10;
    } else if (currentPage + 4 >= totalPages) {
      startPage = totalPages - 9;
      endPage = totalPages;
    } else {
      startPage = currentPage - 5;
      endPage = currentPage + 4;
    }
  }


  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className={styles.pagination}>
      <li className={styles.pageItem} onClick={() => onPageChange(currentPage - 1)}>
        Назад
      </li>

      <div className={styles.items}>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={cn(styles.pageItem, number === currentPage ? styles.active : '')}
            onClick={() => onPageChange(number)}
          >
            {number}
          </li>
        ))}
      </div>

      <li className={styles.pageItem} onClick={() => onPageChange(currentPage + 1)}>
        Далее
      </li>

    </ul>
  );
};