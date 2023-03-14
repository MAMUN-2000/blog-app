import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchSingleBlogAPI from "./singleBlogAPI";

// initial state
const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const fetchSingleBlog = createAsyncThunk(
  "blog/fetchSingleBlog",
  async (id) => {
    const blog = await fetchSingleBlogAPI(id);
    return blog;
  }
);

const singleBlogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleBlog.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchSingleBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(fetchSingleBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.blog = {};
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});

export default singleBlogSlice.reducer;
