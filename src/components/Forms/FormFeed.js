import React from "react";
import { useFormikContext } from "formik";

function FormFeed({ name, accept, as, width, type, lable, ...otherProp }) {
  const {
    handleChange,
    touched,
    setFieldTouched,
    errors,
    values,
  } = useFormikContext();

  const clasess =
    touched[name] && errors[name] ? "form-control is-invalid" : "form-control";

  return (
    <div className="form-group">
      <label className="lable">{lable}</label>
      <input
        id={name}
        name={name}
        accept={accept}
        className={clasess}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        onChange={handleChange(name)}
        type={type}
        {...otherProp}
      />

      {touched[name] && errors[name] ? (
        <div className="inv-fedback-custom">{errors[name]}</div>
      ) : null}
    </div>
  );
}

export default FormFeed;
