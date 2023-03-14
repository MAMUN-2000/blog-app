import BlogItem from "./BlogItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import Loading from "../ui/Loading";
import Error from "../ui/Error";

function BlogList() {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, errorMessage } = useSelector(
    (state) => state.blogs
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // Decide what to render
  let element;

  if (isLoading) {
    element = <Loading />;
  }
  if (isError) {
    element = <Error msg={errorMessage} />;
  }
  if (!isError && !isLoading && blogs.length === 0) {
    element = <h1>NO BLOGS FOUND ! </h1>;
  }
  if (!isError && !isLoading && blogs.length > 0) {
    element = blogs.map((blog) => <BlogItem key={blog?.id} {...blog} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {element}
    </main>
  );
}

export default BlogList;
