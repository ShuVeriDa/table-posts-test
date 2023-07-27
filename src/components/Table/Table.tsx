import {FC, useEffect} from 'react';
import styles from './Table.module.scss';
import {Header} from "./Header/Header.tsx";
import {Main} from "./Main/Main.tsx";
import {Pagination} from "../Pagination/Pagination.tsx";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../redux/store.ts";
import {fetchPostsTC} from "../../redux/table/table.actions.ts";
import {setCurrentPage, setOrder, setSortTitle} from "../../redux/table/tableSlice.ts";

interface ITableProps {
}

export const Table: FC<ITableProps> = () => {
  const {order, sortTitle, currentPage, posts, search} = useAppSelector((state) => state.table);
  const dispatch = useDispatch<AppDispatchType>();

  useEffect(() => {
    dispatch(
      fetchPostsTC({search, order, sortTitle, currentPage})
    );
  }, [currentPage, search, order, sortTitle]);

  const onChaneCurrentPage = (num: number) => dispatch(setCurrentPage(num))

  const onChangeSort = (value: 'id' | 'body' | 'title') => {
    dispatch(setSortTitle(value))
    dispatch(setOrder(order === 'asc' ? 'desc' : 'asc'));
  }

  return (
    <div className={styles.table}>
      <table style={{
        borderCollapse: 'collapse',
        tableLayout: 'fixed',
        width: '100%',
        border: '1px solid #e3e6ec'
      }}
      >
        <Header onChangeSort={onChangeSort}
                sortTitle={sortTitle}
                order={order}
        />
        <Main posts={posts}/>
      </table>
      <Pagination currentPage={currentPage}
                  onPageChange={onChaneCurrentPage}
                  totalPages={posts.length}
      />
    </div>
  );
};