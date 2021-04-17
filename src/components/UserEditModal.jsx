import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import * as yup from "yup";

import editIcon from "./assets/edit.svg";
import { Form, FormFeed, SubmitButon } from "./Forms";

function UserEditModal({ data, onUserEdit, className }) {
  const [show, setShow] = useState(false);
  const initialValues = data
    ? { email: data.email, age: data.age, name: data.name, number: data.number }
    : { email: "", age: "", name: "", number: "" };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validationSchema = yup.object().shape({
    name: yup.string().required().label("Name"),
    number: yup
      .number()
      .test("phone", "Phone must be exact 10 numbers long !", (val) => {
        if (val === undefined) return false;
        return val.toString().length === 10;
      })
      .required()
      .label("Phone"),
    age: yup.number().required().min(10).max(100).label("Age"),
    email: yup.string().email().required().label("Email"),
  });

  return (
    <>
      {data ? (
        <img onClick={handleShow} src={editIcon} alt="edit-icon" width="25px" />
      ) : (
        <button onClick={handleShow} className="btn btn-primary newUserButton">
          New User
        </button>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(newUser) => {
              //Sending new updated user and his ID to parrent component, if available !
              if (data) {
                newUser._id = data._id;
                onUserEdit(newUser, data._id);
              } else {
                onUserEdit(newUser);
              }
              //closing modal
              setShow(false);
            }}
          >
            <FormFeed lable="Name" name="name" placeholder="name" />
            <FormFeed lable="Phone" name="number" placeholder="number" />
            <FormFeed lable="Age" name="age" placeholder="age" />
            <FormFeed lable="Email" name="email" placeholder="email" />
            <div className="btnContainer">
              <SubmitButon title="Save Changes" />
              <Button
                variant="secondary"
                className="btnSelf"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default UserEditModal;
