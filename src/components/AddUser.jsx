import * as yup from "yup";
import React from "react";
import { Form, FormFeed, SubmitButon } from "./Forms";
import api from "../api/http";
import tost, { toast } from "react-hot-toast";

const validationSchema = yup.object().shape({
  name: yup.string().required().label("Name"),
  number: yup.number().required().label("Phone"),
  age: yup.number().required().label("Age"),
  email: yup.string().email().required().label("Email"),
});

const AddUser = ({ callback }) => {
  const handleAddUser = (newUser) => {
    let data = "";
    const promise = api
      .post("/auth/register", newUser)
      .then((res) => (data = res.data))
      .catch((err) => console.log(err));

    toast.promise(promise, {
      loading: "Hold On loding...",
      success: `${data.info}`,
      error: `${data.error || "Unecepeted Error occured, Please reload Page!"}`,
    });
  };

  return (
    <div className="user-form">
      <Form
        initialValues={{ name: "", number: "", age: "", email: "" }}
        validationSchema={validationSchema}
        values
        onSubmit={handleAddUser}
      >
        <div className="form-group row">
          <FormFeed lable="Name" name="name" placeholder="name" />
        </div>
        <div className="form-group row">
          <FormFeed lable="Phone" name="number" placeholder="number" />
        </div>
        <div className="form-group row">
          <FormFeed lable="Age" name="age" placeholder="age" />
        </div>
        <div className="form-group row">
          <FormFeed lable="Email" name="email" placeholder="email" />
        </div>
        <SubmitButon title="Add User" />
      </Form>
    </div>
  );
};

export default AddUser;
