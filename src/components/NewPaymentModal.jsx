import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import * as yup from "yup";

import "react-datepicker/dist/react-datepicker.css";
import FormDatePicker from "./Forms/FormDatePicker";
import { FormFeed, SubmitButon } from "./Forms";

import FormSelectFeed from "./Forms/FormSelectFeed";
import { Formik, Form } from "formik";

const emptyValues = {
  userId: "",
  planId: "",
  amount: "",
  paymentDate: "",
  validUpto: "",
  paymentMode: "",
  note: "",
  transactionId: "",
};

const paymentModeOptions = [
  { label: "Cash", value: "cash" },
  { label: "Online", value: "online" },
];

const schema = yup.object().shape({
  userId: yup.string().required().label("User"),
  planId: yup.string().required().label("Plan"),
  amount: yup
    .number()
    .required()
    .label("Amount")
    .typeError("Amount should be a number"),
  paymentDate: yup
    .date()
    .required()
    .label("Payment Date")
    .typeError("Please Select a Payment Date"),
  validUpto: yup
    .date()
    .required()
    .label("Validity")
    .typeError("Please Select a Validity of Payment"),
  paymentMode: yup
    .string()
    .required()
    .typeError("Please select a payment Mode !")
    .label("Payment mode"),
  transactionId: yup.string(),
  note: yup.string(),
});

function UserEditModal({ users, plans, onSubmit }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const usersOption = users.map((u) => {
    return { label: u.name, value: u._id };
  });

  const plansOption = plans.map((p) => {
    return { label: p.title, value: p._id };
  });

  return (
    <>
      <button onClick={handleShow} className="btn btn-primary">
        New Payment
      </button>
      <Modal dialogClassName="modal-big" show={show} onHide={handleClose}>
        <Modal.Header>
          <h3>New Payment</h3>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={emptyValues}
            onSubmit={(newPayment) => {
              setShow(false);
              onSubmit(newPayment);
            }}
            validationSchema={schema}
          >
            {(formik, isSubmiting) => (
              <Form>
                <div className="payment-modal container">
                  <div className="row needs-validation">
                    <FormSelectFeed
                      label="User"
                      name="userId"
                      options={usersOption}
                      placeholder="Select User..."
                    />
                    <FormSelectFeed
                      label="Select Plan"
                      name="planId"
                      options={plansOption}
                      placeholder="Select..."
                    />
                  </div>

                  <FormFeed name="amount" lable="Amount" placeholder="Amount" />

                  <FormSelectFeed
                    className="ml-auto mr-auto"
                    label="Payment Mode"
                    name="paymentMode"
                    options={paymentModeOptions}
                  />

                  <div className="payment-date-container">
                    <FormDatePicker
                      placeholder="Date"
                      name="paymentDate"
                      label="Payment Date"
                    />

                    <FormDatePicker
                      label="Valid upto"
                      name="validUpto"
                      placeholder="Date"
                    />
                  </div>

                  <FormFeed
                    name="transactionId"
                    lable="Transaction Id"
                    placeholder="trancsaction ID"
                  />

                  <FormFeed
                    lable="Note"
                    name="note"
                    placeholder="any note about transection..."
                  />

                  <div className="btnContainer">
                    <SubmitButon title="Save Payment" />
                    <Button
                      variant="secondary"
                      className="btnSelf"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UserEditModal;
