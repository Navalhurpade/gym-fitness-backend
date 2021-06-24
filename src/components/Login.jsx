import React, { useState, useEffect } from "react";
import { Form as FormikForm } from "./Forms";
import LoginForm from "./LoginForm";
import * as yup from "yup";
import api from "../api/http";
import toast, { Toaster } from "react-hot-toast";
import { Redirect, useHistory } from "react-router-dom";
import { isUserLoggedIn, loginUser } from "../api/userLogger";
import ScrollToTop from "./ScrollToTop";

const validationSchema = yup.object().shape({
  email: yup.string().email().label("Email").required(),
  password: yup.string().label("Password").required(),
});

function Login(props) {
  let history = useHistory();
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    alert(
      "This is a demo account, Automaticaly added !\nUSERNAME: demo@mail.com,\nPASSWORD: 1234"
    );
  }, []);

  const user = isUserLoggedIn();

  if (user) return <Redirect to="/adminPage" />;

  const handleLogin = async (loginDetails) => {
    const { ok, data, status } = await api.apiSauce.post("/auth", loginDetails);
    if (ok) {
      if (data) {
        toast.success("logged in ");
        loginUser(data, rememberMe);
        history.push("/adminPage");
      } else toast.error("Somethig goes wrong");
    } else if (status === 404 || status === 400) {
      toast.error(data.error);
    }
  };

  return (
    <div className="login-page">
      <ScrollToTop />
      <Toaster />
      <FormikForm
        initialValues={{ email: "demo@mail.com", password: "1234" }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        <LoginForm rememberme={rememberMe} setRememberme={setRememberMe} />
      </FormikForm>
    </div>
  );
}

export default Login;
