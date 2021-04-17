import React from "react";
import { useFormikContext } from "formik";

function SubmitButon({ title, className }) {
  const { handleSubmit } = useFormikContext();
  return (
    <button
      type="submit"
      className={`btn btn-primary ${className}`}
      onClick={handleSubmit}
    >
      {title}
    </button>
  );
}

export default SubmitButon;
