import { configureStore } from "@reduxjs/toolkit";
import singleBlogReducer from "../features/blog/singleBlogSlice";
import blogsReducer from "../features/blogs/blogsSlice";
import relatedBlogReducer from "../features/relatedBlog/relatedBlogSlice";
import savedBlogsSlice from "../features/saved/savedBlogsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    singleBlog: singleBlogReducer,
    relatedBlogs: relatedBlogReducer,
    saved: savedBlogsSlice,
  },
});
