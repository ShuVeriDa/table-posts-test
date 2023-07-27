import {useCallback} from "react";
import debounce from "lodash.debounce";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../redux/store.ts";
import {setCurrentPage} from "../redux/table/tableSlice.ts";

export const useDebounce = (callback: (value: string) => void, delay: number) => {
  const dispatch = useDispatch<AppDispatchType>();
  return useCallback(
    debounce((str: string) => {
      callback(str);
      dispatch(setCurrentPage(1))
    }, delay),
    []
  );
};