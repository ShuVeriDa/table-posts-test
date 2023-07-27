import {useCallback} from "react";
import debounce from "lodash.debounce";

export const useDebounce = (callback: (value: string) => void, delay: number) => {
  return useCallback(
    debounce((str: string) => {
      callback(str);
    }, delay),
    []
  );
};