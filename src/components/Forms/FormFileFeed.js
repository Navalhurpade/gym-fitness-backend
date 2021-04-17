import React, { useState } from "react";
import { useFormikContext } from "formik";

function FormFileFeed({ name, lable, ...otherProp }) {
  const [file, setFile] = useState("");
  const { touched, setFieldTouched, errors } = useFormikContext();

  const clasess =
    touched[name] && errors[name] ? "form-control is-invalid" : "form-control";

  return (
    <div className="form-group">
      <label className="lable">{lable}</label>
      <input
        id={name}
        name={name}
        className={clasess}
        onBlur={() => setFieldTouched(name)}
        value={file}
        accept=".jpeg"
        onChange={(e) => {
          const file = e.currentTarget.files;
          console.log(e);
          console.log(file);
          setFile(file);
        }}
        type="file"
        {...otherProp}
      />

      {touched[name] && errors[name] ? (
        <div className="inv-fedback-custom">{errors[name]}</div>
      ) : null}
    </div>
  );
}

export default FormFileFeed;
