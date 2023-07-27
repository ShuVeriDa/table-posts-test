import './App.css'
import {Search} from "./components/Search/Search.tsx";
import {Table} from "./components/Table/Table.tsx";
import {Pagination} from "./components/Pagination/Pagination.tsx";
import {setCurrentPage} from "./redux/table/tableSlice.ts";
import {AppDispatchType, useAppSelector} from "./redux/store.ts";
import {useDispatch} from "react-redux";

function App() {
  const {currentPage, posts} = useAppSelector((state) => state.table);
  const dispatch = useDispatch<AppDispatchType>();
  const onChaneCurrentPage = (num: number) => dispatch(setCurrentPage(num))
  return (
    <div className='app'>
      <Search />
      <Table />
      <Pagination currentPage={currentPage}
                  onPageChange={onChaneCurrentPage}
                  totalPages={posts.length}
      />
    </div>
  )
}

export default App
