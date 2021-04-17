import React from "react";
import { Redirect } from "react-router-dom";
import { isUserLoggedIn } from "../api/userLogger";
import AdminPage from "./AdminPage";

function ProtectedRoute() {
  const user = isUserLoggedIn();

  if (!user) {
    return <Redirect to="/login" />;
  } else {
    return <AdminPage />;
  }
}

export default ProtectedRoute;
