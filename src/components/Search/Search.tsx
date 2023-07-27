import {ChangeEvent, FC, useState} from 'react';
import styles from './Search.module.scss';
import {ClearSearchValueSVG, MagnifierSVG} from "../SvgComponents.tsx";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../redux/store.ts";
import {setSearch} from "../../redux/table/tableSlice.ts";
import {useDebounce} from "../../utils/useDebounce.ts";

interface ISearchProps {}

export const Search: FC<ISearchProps> = () => {
  const search = useAppSelector((state) => state.table.search);
  const dispatch = useDispatch<AppDispatchType>();
  const [value, setValue] = useState(search ? search : '')

  const updatedSearch = useDebounce((str: string) => {
    dispatch(setSearch(str))
  }, 350)

  const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    updatedSearch(e.currentTarget.value)
    setValue(e.currentTarget.value)
  }

  const onClearSearch = () => {
    setValue('')
    updatedSearch("")
  }

  return (
    <div className={styles.search}>
      <input type="text"
             className={styles.input}
             placeholder={'Поиск'}
             value={value}
             onChange={onChangeSearchValue}
      />

      {search
        ? <ClearSearchValueSVG styles={styles.clearSvg}
                               onClick={onClearSearch}
        />
        : <MagnifierSVG styles={styles.searchSvg}/>}

    </div>
  );
};