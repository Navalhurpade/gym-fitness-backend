import { useFormikContext } from "formik";
import React, { useState } from "react";
import Select from "react-select";

function FormSelectFeed({ name, placeholder, className, options, label }) {
  const [state, setState] = useState({});
  const {
    touched,
    setFieldTouched,
    setFieldValue,
    errors,
  } = useFormikContext();

  const clasess =
    touched[name] && errors[name]
      ? "form-control adjustment is-invalid"
      : "form-control adjustment ";

  return (
    <div className={`form-group w-50 px-2 ${className}`}>
      <label className="lable">{label}</label>
      <Select
        value={state}
        className={clasess}
        placeholder={placeholder}
        onChange={(object) => {
          setState(object);
          setFieldValue(name, object.value);
        }}
        onBlur={() => setFieldTouched(name)}
        options={options}
      />

      {touched[name] && errors[name] ? (
        <div className="invalid-feedback inv-fedback-custom">
          {errors[name]}
        </div>
      ) : null}
    </div>
  );
}

export default FormSelectFeed;
