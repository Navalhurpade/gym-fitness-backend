import React from "react";
import BlogCard from "./blogCard";
import ScrollToTop from "./ScrollToTop";

function BlogsPage({ blogs }) {
  return (
    <div className="blogs-container">
      <ScrollToTop />
      {blogs.map((b) => (
        <BlogCard
          key={b._id}
          title={b.title}
          tagLine={b.tagLine}
          content={b.content}
          date={b.date}
          id={b._id}
          img={b.img}
        />
      ))}
    </div>
  );
}

export default BlogsPage;
