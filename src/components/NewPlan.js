import * as yup from "yup";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form, FormFeed, SubmitButon } from "./Forms";

const validationSchama = yup.object().shape({
  title: yup.string().required().label("Title").typeError("Please set title"),
  price: yup.number().required().label("Prize"),
  validity: yup.string().required(),
  description: yup.string(),
});

function NewPlan({ plan, onSubmit }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="plan-codal-container">
      <button onClick={handleShow} className="btn btn-primary">
        Add Plan
      </button>
      <Modal className="planModal" show={show} onHide={handleClose}>
        <Modal.Header>
          <h2>{plan ? "Edit Plan" : "New Plan"}</h2>
        </Modal.Header>
        <Form
          initialValues={{
            title: "",
            price: "",
            validity: "",
            description: "",
          }}
          validationSchema={validationSchama}
          onSubmit={(plan) => {
            setShow(false);
            console.log(plan);
            onSubmit(plan);
          }}
        >
          <Modal.Body>
            <FormFeed
              name="title"
              lable="Title"
              placeholder="Give a title..."
            />

            <FormFeed
              name="price"
              lable="Price"
              type="number"
              placeholder="Enter price"
            />

            <FormFeed
              name="validity"
              lable="Validity"
              placeholder="Set plan validity"
            />

            <FormFeed
              name="description"
              lable="Descrytion"
              placeholder="describe plans details..."
            />
          </Modal.Body>
          <Modal.Footer>
            <SubmitButon title="Add Plan" />
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default NewPlan;
