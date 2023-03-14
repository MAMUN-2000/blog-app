import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleBlog } from "../../features/blog/singleBlogSlice";
import { added, removed, saved } from "../../features/saved/savedBlogsSlice";
import Error from "../ui/Error";
import Loading from "../ui/Loading";

function SingleBlog() {
  const { postId: id } = useParams();
  const dispatch = useDispatch();
  const { savedBlogs, save } = useSelector((s) => s.saved);
  const { blog, isLoading, isError, errorMessage, isSaved } = useSelector(
    (state) => state.singleBlog
  );

  const { title, image, description, tags, likes } = blog;
  useEffect(() => {
    dispatch(fetchSingleBlog(Number(id)));
  }, [dispatch, id]);
  console.log(savedBlogs);

  const handleSaveBtn = () => {
    // if (selected) {
    //   dispatch(removed(blog));
    // } else {
    //   dispatch(saved(blog));
    // }

    dispatch(saved());

    if (isSaved) {
      dispatch(added(blog));
    } else {
      dispatch(removed(blog));
    }
  };

  // decide what to render

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error msg={errorMessage} />;
  }

  return (
    <main className="post">
      <img
        src={image}
        alt="githum"
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags?.map((tag, index) => (
            <span key={index}>#{tag}</span>
          ))}
        </div>
        <div className="btn-group">
          <button className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </button>

          <button
            onClick={handleSaveBtn}
            className={save ? "active save-btn" : "save-btn"}
            id="lws-singleSavedBtn"
          >
            <i className="fa-regular fa-bookmark"></i> Saved
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
}

export default SingleBlog;
