import React from "react";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <p className="text-danger ">{error}</p>;
}

export default ErrorMessage;
