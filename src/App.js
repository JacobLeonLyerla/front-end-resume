import React, { Component } from "react";

import { Route } from "react-router-dom";

import axios from "axios";
import "./css/project.css"
import "./App.css";

import "./css/main.css";


import { Row } from "reactstrap";

import Nav from "./Home/nav";

import ProjectPreview from "./Project/projectPreview.component";

import MiddlePanel from "./MiddleComponent/middle";

import RightPanel from "./RightComponent/right";

import Footer from "./Footer/footer";


class App extends Component {
  // assign state and name props
  state = {
    projects: [],

    index: 0,

    gif: ""
  };

  // life cycle method component did mount
  componentDidMount() {
    this.getProject();
  }

  // axios get request
  getProject = () => {
    axios
      .get("https://jacob-lyerla-resume.herokuapp.com/projects")

      .then(response => {
        this.setState({ projects: response.data });
      });
  };

  incresseIndex = direction => {
    let index = 0;

    if (direction === "Right") {
      if (this.state.index + 1 < this.state.projects.length) {
        index = this.state.index + 1;
      } else index = 0;
    } else {
      if (this.state.index - 1 !== -1) {
        index = this.state.index - 1;
      } else {
        index = this.state.projects.length - 1;
      }
    }

    this.setState({ index, gif: "" });
  };

  // toggleGif = gif => {
  //   this.setState({ gif });
  // };
  render() {
    return (
      <div className="App">
        {/* rendering the Nav component,
     the nav will always be at the top of the page.
    */}

        {/* set sup routing and pass in our state */}

        <Route path="/" component={Nav} />

         <ProjectPreview/>
        {/* rendering the left, middle and right components,
using a row and columns to size them correctly */}
        <Row className="component-styles"> 
      
          <Route exact path="/" component={RightPanel} />
          <Route exact path="/" component={MiddlePanel} />
        </Row>
        {/* Rendering the footer at the bottom of the page. */}
        <Footer />
      </div>
    );
  }
}

export default App;
