import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../api/http";
import BlogModel from "./BlogModel";
import deleteIcon from "./assets/delete.svg";
import imageCompression from "browser-image-compression";

const options = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
};

function ManegeBlogs({ blogs }) {
  const [allBlogs, setBlogs] = useState(blogs);
  const [show, setShow] = useState(false);

  async function handleNewBlog(blog) {
    //compressing
    const compressedFile = await imageCompression(blog.coverImg, options);

    //Set MimeType to multipart/form-data by using FormData method
    const form = new FormData();

    //append each key value pairs using append
    form.append("title", blog.title);
    form.append("tagLine", blog.tagLine);
    form.append("content", blog.content);
    form.append("coverImg", compressedFile);

    const res = api.axiosApi
      .post("/blogs/new", form)
      .then((responce) => {
        setBlogs([...blogs, blog]);
        setShow(false);
      })
      .catch((err) => {
        console.log(err);
      });

    toast.promise(res, {
      loading: "uploding, please wait !",
      success: "Succes !",
      error: "Error Occured !",
    });
  }

  const handleDelete = async (id) => {
    const { ok, problem, data } = await api.apiSauce.post("/blogs/delete", {
      id: id,
    });

    if (ok) {
      toast.success(data.info);
      setBlogs(allBlogs.filter((b) => b._id !== id));
    } else if (data) {
      toast.error(data.error);
      console.log(problem);
    } else {
      console.log(problem);
      toast.error("Something gone wrong");
    }
    return;
  };
  return (
    <div className="">
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="collumn" itemScope="col">
                #
              </th>
              <th className="collumn" itemScope="col">
                TagLine
              </th>
              <th className="collumn" itemScope="col">
                Title
              </th>
              <th className="collumn" itemScope="col">
                content
              </th>
              <th className="collumn" itemScope="col"></th>
            </tr>
          </thead>
          <tbody>
            {allBlogs.map((blog, index) => {
              return (
                <tr className="row-header" key={index}>
                  <th itemScope="row">{index + 1}</th>
                  <td className="collumn">{blog.tagLine}</td>
                  <td className="collumn">{blog.title.slice(0, 30)}...</td>
                  <td className="collumn">{blog.content.slice(0, 50)}...</td>
                  <td className="collumn">
                    <img
                      src={deleteIcon}
                      width="25px"
                      alt="delete-icon"
                      onClick={() => handleDelete(blog._id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <BlogModel show={show} setShow={setShow} onSubmit={handleNewBlog} />
    </div>
  );
}

export default ManegeBlogs;
