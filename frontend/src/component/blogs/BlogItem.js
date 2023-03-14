import { Link } from "react-router-dom";

function BlogItem(blog) {
  return (
    <div className="lws-card">
      <Link to={`/blogs/${blog.id}`}>
        <img src={blog.image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{blog.createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {blog.likes}
          </p>
        </div>
        <Link to={`/blogs/${blog.id}`} className="lws-postTitle">
          {blog.title}
        </Link>
        <div className="lws-tags">
          {blog.tags.map((tag, index) => (
            <span key={index}>#{tag}</span>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <span className="lws-badge"> Saved </span>
        </div>
      </div>
    </div>
  );
}
export default BlogItem;
