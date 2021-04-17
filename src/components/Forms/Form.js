import React from "react";
import { Formik, Form as FormikForm } from "formik";

function Form({ children, ...rest }) {
  return <Formik {...rest}>{() => <FormikForm>{children}</FormikForm>}</Formik>;
}

export default Form;
