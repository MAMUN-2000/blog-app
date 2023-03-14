import SingleBlog from "../component/blogs/SingleBlog";
import RelatedBlogList from "../component/sidebar/RelatedBlogList";
import GobackHome from "../component/ui/GobackHome";

function Post() {
  return (
    <>
      <GobackHome />
      <section className="post-page-container">
        <SingleBlog />
        <RelatedBlogList />
      </section>
    </>
  );
}

export default Post;
