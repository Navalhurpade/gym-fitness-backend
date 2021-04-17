import React, { useState } from "react";
import { Modal } from "react-bootstrap";

// const validationSchema = yup.object().shape({
//   tagLine: yup.string().required(),
//   title: yup.string().required(),
//   content: yup.string().required(),
//   coverImg: yup
//     .mixed()
//     .test("fileSize", "Please provide a good Qulity Image", (value) => {
//       if (!value.length) return false;
//     }).required("Please provide a good Qulity Image")
// });

function BlogModel({ onSubmit, show, setShow }) {
  const [state, setState] = useState({
    tagLine: "",
    title: "",
    content: "",
    coverImg: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validateAndSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
  };

  return (
    <>
      <button onClick={handleShow} className="btn btn-primary">
        New Blog
      </button>
      <Modal show={show}>
        <Modal.Header>Add New Blog</Modal.Header>
        <Modal.Body>
          <form className="form-group" onSubmit={validateAndSubmit}>
            <label>TagLine</label>
            <input
              className="form-control"
              name="tagLine"
              type="text"
              onChange={(e) =>
                setState({ ...state, tagLine: e.currentTarget.value })
              }
            />
            <label>Title</label>
            <input
              className="form-control"
              name="subTitle"
              type="text"
              onChange={(e) =>
                setState({ ...state, title: e.currentTarget.value })
              }
            />

            <label>content</label>
            <textarea
              className="form-control"
              name="content"
              onChange={(e) =>
                setState({ ...state, content: e.currentTarget.value })
              }
              type="text"
            />
            <label>Cover Photo</label>

            <input
              className="form-control-file"
              name="coverImg"
              type="file"
              onChange={(e) => {
                setState({ ...state, coverImg: e.currentTarget.files[0] });
              }}
            />

            <Modal.Footer>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                close
              </button>
              <button type="submit" className="btn btn-primary">
                Publish
              </button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BlogModel;
