import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import "./SocialButtons.css";
import "./loginform.css";
import "./styles.css";
import "./TableStyles.css";
import "./blogCard.css";
import "./loding.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import BlogsPage from "./components/BlogsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";
import ReadBlog from "./components/ReadBlog";
import toast from "react-hot-toast";
import api from "./api/http";
import contactUsPage from "./components/contactUsPage";
import NotFoundPage from "./components/NotFoundPage";
import "./emailButton.css";

function App() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const { ok, data, problem } = await api.apiSauce.get("/blogs");
      if (ok) {
        setBlogs(data);
      } else {
        toast.error("Something goes wrong !");
        console.log(problem);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/blogs"
          exact
          component={() => <BlogsPage blogs={blogs} />}
        />
        <Route
          path="/blogs/:id"
          exact
          component={() => <ReadBlog blogs={blogs} />}
        />
        <Route path="/login" exact component={Login} />
        <Route path="/adminPage" exact component={ProtectedRoute} />
        <Route path="/contactUs" exact component={contactUsPage} />
        <Route path="/Not-Found" component={NotFoundPage} />
        <Redirect to="/Not-Found" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
