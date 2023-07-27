import {createSlice} from "@reduxjs/toolkit";
import {fetchPostsTC} from "./table.actions.ts";
import {IPost} from "../types.interface.ts";

interface IInitialState {
  search: string,
  order: 'asc' | 'desc';
  sortTitle: 'id' | 'body' | 'title';
  currentPage: number;
  posts: IPost[];
  status: 'loading' | 'success' | 'error';
  error: string | null;
}

const initialState: IInitialState = {
  search: '',
  order: 'asc',
  sortTitle: 'id',
  currentPage: 1,
  posts: [],
  status: 'loading',
  error: null,
};



const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSortTitle(state, action) {
      state.sortTitle = action.payload;
    },
    setOrder(state, action) {
      state.order = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsTC.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPostsTC.fulfilled, (state, action) => {
        state.status = 'success';
        state.posts = action.payload!;
      })
      .addCase(fetchPostsTC.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message || null;
      });
  },
});

export const { setCurrentPage, setSortTitle, setOrder, setSearch } = tableSlice.actions;

export const tableReducer  = tableSlice.reducer