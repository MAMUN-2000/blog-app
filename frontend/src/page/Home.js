function Home() {
  return (
    <section className="wrapper">
      <aside>
        <div className="sidebar-items">
          <div className="sidebar-content">
            <h4>Sort</h4>
            <select
              name="sort"
              id="lws-sort"
              className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            >
              <option value="">Default</option>
              <option value="newest">Newest</option>
              <option value="most_liked">Most Liked</option>
            </select>
          </div>
          <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group">
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="lws-all"
                  checked
                  className="radio"
                />
                <label for="lws-all">All</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="lws-saved"
                  className="radio"
                />
                <label for="lws-saved">Saved</label>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main className="post-container" id="lws-postContainer">
        <div className="lws-card">
          <a href="post.html">
            <img src="./images/git.webp" className="lws-card-image" alt="" />
          </a>
          <div className="p-4">
            <div className="lws-card-header">
              <p className="lws-publishedDate">2023-05-01</p>
              <p className="lws-likeCount">
                <i className="fa-regular fa-thumbs-up"></i>100
              </p>
            </div>
            <a href="post.html" className="lws-postTitle">
              {" "}
              Top Github Alternatives{" "}
            </a>
            <div className="lws-tags">
              <span>#python,</span> <span>#tech,</span> <span>#git</span>
            </div>
            <div className="flex gap-2 mt-4">
              <span className="lws-badge"> Saved </span>
            </div>
          </div>
        </div>

        <div className="lws-card">
          <a href="post.html">
            <img
              src="./images/git.webp"
              className="lws-card-image"
              alt="Top Github Alternatives"
            />
          </a>
          <div className="p-4">
            <div className="lws-card-header">
              <p className="lws-publishedDate">2023-05-01</p>
              <p className="lws-likeCount">
                <i className="fa-regular fa-thumbs-up"></i>100
              </p>
            </div>
            <a href="post.html" className="lws-postTitle">
              {" "}
              Top Github Alternatives{" "}
            </a>
            <div className="lws-tags">
              <span>#python,</span> <span>#tech,</span> <span>#git</span>
            </div>
            <div className="flex gap-2 mt-4">
              <span className="lws-badge"> Saved </span>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
export default Home;
