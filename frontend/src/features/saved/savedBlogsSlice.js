import { createSlice } from "@reduxjs/toolkit";
// import fatchRelatedBlogAPI from "./relatadBlogAPI";

// initial state
const initialState = {
  savedBlogs: [],
  save: false,
  isLoading: false,
  isError: false,
  errorMessage: "",
};

// export const fetchSavedBlogs = createAsyncThunk(
//   "saved/fetchSavedBlogs",
//   async ({ tags, id }) => {
//     const blog = await fatchRelatedBlogAPI(tags, id);
//     return blog;
//   }
// );

const savedBlogSlice = createSlice({
  name: "savedBlogs",
  initialState,
  reducers: {
    saved(state, action) {
      state.save = true;
    },
    added(state, action) {
      state.savedBlogs.push(action.payload);
    },
    removed(state, action) {
      const blgIndex = state.savedBlogs.indexOf(action.payload);
      if (blgIndex !== -1) {
        state.savedBlogs.splice(blgIndex, 1);
      }
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchSavedBlogs.pending, (state) => {
  //         state.isError = false;
  //         state.isLoading = true;
  //       })
  //       .addCase(fetchSavedBlogs.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //         state.relatedblogs = action.payload;
  //       })
  //       .addCase(fetchSavedBlogs.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.relatedblogs = [];
  //         state.isError = true;
  //         state.errorMessage = action.error.message;
  //       });
  //   },
});

export default savedBlogSlice.reducer;
export const { saved, removed, added } = savedBlogSlice.actions;
