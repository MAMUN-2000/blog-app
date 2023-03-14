import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchBlogsAPI from "./blogsAPI";

// initial state
const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const blogs = await fetchBlogsAPI();
  return blogs;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = [];
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});

export default blogsSlice.reducer;
