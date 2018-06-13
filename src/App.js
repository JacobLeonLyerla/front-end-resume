import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "./css/index.css";
import { Row, Col } from "reactstrap";
import Nav from "./Home/nav";
import LeftPanel from "./LeftComponent/left";
import MiddlePanel from "./MiddleComponent/middle";
import RightPanel from "./RightComponent/right";
import Footer from "./Footer/footer";
import Projects from "./Project/listProjects";
import Project from './Project/project'
class App extends Component {
  // assign state and name props
  state = {
    projects: []
  };
  // life cycle method component did mount
  componentDidMount() {
    console.log("set data from heroku onto state.");
    this.getProject();
  }
  // axios get request
  getProject = () => {
    axios
      .get("https://jacob-lyerla-resume.herokuapp.com/projects")
      .then(response => {
        this.setState({ projects: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="App">
        {/* rendering the Nav component,
     the nav will always be at the top of the page.
    */}

        {/* set sup routing and pass in our state */}
        <Route path="/" component={Nav} />

        {/* rendering the left, middle and right components,
using a row and columns to size them correctly */}

        <Row className="component-styles">
          <Route path="/" component={LeftPanel} />

          <Route exact path="/" component={MiddlePanel} />

          <Route exact path="/" component={RightPanel} />

        
            <Route
             exact path="/projects"
              render={props => <Projects {...props} projects={this.state.projects} />}
            />
         <Route exact path="/projects/:id" component={Project}/>
         
        </Row>
        {/* Rendering the footer at the bottom of the page. */}
        <Footer />
      </div>
    );
  }
}

export default App;
