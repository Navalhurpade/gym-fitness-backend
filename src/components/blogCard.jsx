import React from "react";
import { Link } from "react-router-dom";
import { getReadableImgSrc } from "../util/utils";

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

function blogCard({ title, tagLine, date, img, id }) {
  const src = getReadableImgSrc(img.data.data, img.contentType);

  const newDateFormat = new Date(date).toLocaleDateString(undefined, options);

  return (
    <div className="blog-card">
      <div className="meta">
        <div className="photo" style={{ backgroundImage: `url(${src})` }}></div>
        <ul className="details">
          <li className="author">
            <i>posted by Admin</i>
          </li>
          <li className="date">{newDateFormat}</li>
        </ul>
      </div>
      <div className="description">
        <h1>{tagLine}</h1>
        <p>{title}</p>
        <p className="read-more">
          <Link params className="blog-link" to={`/blogs/${id}`}>
            Read more
          </Link>
        </p>
      </div>
    </div>
  );
}

export default blogCard;
