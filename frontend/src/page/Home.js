import BlogList from "../component/blogs/BlogList";
import AsideHome from "../component/sidebar/AsideHome";

function Home() {
  return (
    <section className="wrapper">
      <AsideHome />
      <BlogList />
    </section>
  );
}
export default Home;
