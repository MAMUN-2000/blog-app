import RelatedBogItem from "./RelatedBogItem";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRelatedBlogs } from "../../features/relatedBlog/relatedBlogSlice";
import Loading from "../ui/Loading";
import Error from "../ui/Error";

function RelatedBlogList() {
  const {
    blog: { tags, id },
  } = useSelector((state) => state.singleBlog);
  const { relatedblogs, isLoading, isError, errorMessage } = useSelector(
    (state) => state.relatedBlogs
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id }));
  }, [dispatch, tags, id]);

  // Decide what to render
  let element;

  if (isLoading) {
    element = <Loading />;
  }
  if (isError) {
    element = <Error msg={errorMessage} />;
  }
  if (!isError && !isLoading && relatedblogs.length === 0) {
    element = <h1>NO BLOGS FOUND ! </h1>;
  }
  if (!isError && !isLoading && relatedblogs.length > 0) {
    element = relatedblogs.map((blog) => (
      <RelatedBogItem key={blog?.id} {...blog} />
    ));
  }

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">{element}</div>
    </aside>
  );
}

export default RelatedBlogList;
