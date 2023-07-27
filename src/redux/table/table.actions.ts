import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IPost, IPostParams} from "../types.interface.ts";

export const fetchPostsTC = createAsyncThunk('table/fetchPosts', async (params: IPostParams, thunkApi) => {
  const {search, currentPage, order, sortTitle} = params;
  try {
    const res = await axios.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10&q=${search}&_sort=${sortTitle}&_order=${order}`);

    return res.data;
  } catch (e) {
    return thunkApi.rejectWithValue(e)
  }
});