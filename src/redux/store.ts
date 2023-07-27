import {AnyAction, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {tableReducer} from "./table/tableSlice.ts";

export const store = configureStore({
  reducer: {
    table: tableReducer
  },

})

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type RootState = ReturnType<typeof store.getState>
export type AppDispatchType = ThunkDispatch<RootState, unknown, AnyAction>