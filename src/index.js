import React from "react";
import ReactDOM from "react-dom";
// where my reactstrap components get their styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/project.css"
import "./css/index.css";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  //wrapping App component with the Router
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
