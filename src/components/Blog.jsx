import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="blog">
      <aside className="aside-blog">
        <div className="aside-container">
          <h1>04</h1>
          <div className="line"></div>
          <div className="section-name">My Blog</div>
        </div>
      </aside>
      <main className="main-blog">
        <h1>Blog? Yeah.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="blog-container">
          <div className="blog-post">
            <div className="blog-text">
              <p className="letter-spacing ">HTML & CSS</p>
              <Link to="/blog">Post 1</Link>
              <p>Some description to blog post</p>
            </div>
          </div>
          <div className="blog-post">
            <div className="blog-text">
              <p className="letter-spacing ">JAVASCRIPT</p>
              <Link to="/blog">Post 2</Link>
              <p>Some description to blog post</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Blog;
