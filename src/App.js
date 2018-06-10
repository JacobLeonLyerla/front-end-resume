import React, { Component } from "react";
import "./App.css";
import "./css/index.css";
import { Row, Col } from "reactstrap";
import Nav from "./Home/nav";
import LeftPanel from "./LeftComponent/left";
import MiddlePanel from "./MiddleComponent/middle";
import RightPanel from "./RightComponent/right";
import Footer from "./Footer/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* rendering the Nav component,
     the nav will always be at the top of the page.
    */}
        <Nav />

        {/* rendering the left, middle and right components,
using a row and columns to size them correctly */}
        <Row className="component-styles">
          <Col md="4" lg="4">
            <LeftPanel />
          </Col>
          <Col md="4" lg="4">
            <MiddlePanel />
          </Col>
          <Col md="4" lg="4">
            <RightPanel />
          </Col>
        </Row>
        {/* Rendering the footer at the bottom of the page. */}
        <Footer />
      </div>
    );
  }
}

export default App;
