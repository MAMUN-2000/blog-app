import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fatchRelatedBlogAPI from "./relatadBlogAPI";

// initial state
const initialState = {
  relatedblogs: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const fetchRelatedBlogs = createAsyncThunk(
  "relatedBlog/fetchRelatedBlogs",
  async ({ tags, id }) => {
    const blog = await fatchRelatedBlogAPI(tags, id);
    return blog;
  }
);

const relatedBlogSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedblogs = action.payload;
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedblogs = [];
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});

export default relatedBlogSlice.reducer;
