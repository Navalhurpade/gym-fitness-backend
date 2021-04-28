import React, { useEffect, useState } from "react";
import logoWhite from "./assets/logo-white.svg";
import logoBlack from "./assets/logo-black.svg";
import singOut from "./assets/sign-out-alt-solid.svg";
import singOutWhite from "./assets/sign-out-white.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import { isUserLoggedIn, loguotUser } from "../api/userLogger";

function Navbar() {
  const { pathname } = useLocation();
  const history = useHistory();

  const [atTop, setAtTop] = useState(
    pathname === "/" || pathname === "/adminPage"
  );

  const user = isUserLoggedIn();

  useEffect(() => {
    if (pathname === "/" || pathname === "/" || pathname === "/adminPage") {
      window.onscroll = function () {
        if (window.pageYOffset < 50) setAtTop(true);
        else setAtTop(false);
      };
    } else setAtTop(false);
  }, [atTop, pathname]);

  const handleLogOut = () => {
    loguotUser();
    history.replace("/");
  };

  return (
    <header className="header ">
      <nav
        className={`navbar navbar-expand-lg fixed-top py-3 ${
          atTop ? "" : "active"
        }`}
      >
        <div className="container">
          <div className="logo-container">
            <div>
              <Link
                to="/"
                className="navbar-brand text-uppercase font-weight-bold"
              >
                {atTop ? (
                  <img alt="logo" className="logo" src={logoWhite} />
                ) : (
                  <img alt="logo" className="logo" src={logoBlack} />
                )}
              </Link>
            </div>

            <div>
              <span style={{ color: atTop ? "#fff" : "#000" }}>
                Fitness Club
              </span>
            </div>
          </div>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler navbar-toggler-right"
          >
            <i className="fa fa-bars"></i>
          </button>

          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link
                  className="nav-link text-uppercase font-weight-bold"
                  to="/"
                >
                  Home<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blogs"
                  className="nav-link text-uppercase font-weight-bold"
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link text-uppercase font-weight-bold"
                >
                  {user ? "Admin Page" : "Admin Login"}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contactUs"
                  className="nav-link text-uppercase font-weight-bold"
                >
                  Contact Us
                </Link>
              </li>
              {user && (
                <li className="logout-li nav-item">
                  {/* eslint-disable-next-line */}
                  <a
                    className="nav-link text-uppercase font-weight-bold"
                    onClick={handleLogOut}
                  >
                    Logout
                    {atTop ? (
                      <img
                        alt="log-out-icon"
                        className="logout-icon"
                        src={singOutWhite}
                      />
                    ) : (
                      <img
                        alt="log-out-icon"
                        className="logout-icon"
                        src={singOut}
                      />
                    )}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
