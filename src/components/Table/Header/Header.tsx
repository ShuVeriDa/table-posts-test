import {FC} from 'react';
import styles from './Header.module.scss';
import {ItemHeader} from "./ItemHeader/ItemHeader.tsx";
import {columns} from "../../../data.ts";

interface IHeaderProps {
  onChangeSort: (value: 'id' | 'body' | 'title') => void
  order: 'asc' | 'desc'
  sortTitle: 'id' | 'body' | 'title'
}

export const Header: FC<IHeaderProps> = ({ onChangeSort, order, sortTitle}) => {
  return (
    <thead className={styles.header}>
      {columns.map((style, i) => (
        <ItemHeader key={i}
                    title={style.title}
                    styles={styles}
                    secondStyles={style.secondStyles}
                    onChaneSort={onChangeSort}
                    order={order}
                    sortTitle={sortTitle}
        />
      ))}
    </thead>
  );
};