import React from "react";
import BlogCard from "./blogCard";

function BlogsPage({ blogs }) {
  return (
    <div className="blogs-container">
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
