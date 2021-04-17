import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getReadableImgSrc } from "../util/utils";

function ReadBlog({ blogs }) {
  const { id } = useParams();
  const [currentBlog] = useState(blogs.find((b) => b._id === id));
  const {
    img: { data, contentType },
  } = currentBlog;

  const src = getReadableImgSrc(data.data, contentType);
  return (
    <div className="blog-details">
      <div className="blog-title">
        <h1>{currentBlog.title}</h1>
      </div>
      <div className="blog-img">
        <img alt="blog-img" src={src} />
      </div>
      <div className="blog-content">
        <p>{currentBlog.content}</p>
      </div>
    </div>
  );
}

export default ReadBlog;
