import React, { useState } from "react";
import { useFormikContext } from "formik";

import DatePicker from "react-datepicker";

function FormDatePicker({ name, label, placeholder }) {
  const [state, setState] = useState("");
  const {
    touched,
    setFieldTouched,
    errors,
    setFieldValue,
  } = useFormikContext();

  const clasess =
    touched[name] && errors[name] ? "form-control is-invalid" : "form-control";

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="">
      <label className="lable">{label}</label>
      <DatePicker
        onBlur={() => setFieldTouched(name)}
        dateFormat="yyyy-mm-dd"
        className={clasess}
        placeholderText={placeholder}
        selected={state}
        onChange={(d) => {
          console.log(typeof d);
          setState(d);
          setFieldValue(name, d.toLocaleDateString(undefined, options));
        }}
      />
      {touched[name] && errors[name] ? (
        <div className="text-danger error-message">{errors[name]}</div>
      ) : null}
    </div>
  );
}

export default FormDatePicker;
