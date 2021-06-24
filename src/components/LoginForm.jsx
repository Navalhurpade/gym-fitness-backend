import React from "react";

import { FormFeed, SubmitButon } from "./Forms";

import adminIcon from "./assets/admin.svg";

function LoginForm({ rememberme, setRememberme }) {
  return (
    <div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* <!-- Tabs Title --> */}
          <h2 className="active"> Admin Login </h2>

          {/* <!-- Icon --> */}
          <div className="fadeIn first">
            <img
              className="img-rounded admin-icon"
              src={adminIcon}
              id="icon"
              alt="User Icon"
            />
          </div>
          {/* <text>Demo userName: demo@mail.com\nPassword: 1234</text> */}

          {/* <!-- Login Form --> */}
          <FormFeed
            type="text"
            className="fadeIn second login-feed"
            name="email"
            placeholder="login"
          />

          <FormFeed
            type="password"
            id="password"
            className="fadeIn third login-feed"
            name="password"
            placeholder="password"
          />
          <div className="rememberMe">
            <label>Remember me </label>
            <input
              type="checkbox"
              checked={rememberme}
              onChange={() => setRememberme(!rememberme)}
            />
          </div>
          <SubmitButon
            type="submit"
            title="Login"
            className="fadeIn fourth login-btn "
          />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
