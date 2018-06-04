import React, { Component } from "react";
import "./App.css";
import "./css/index.css";
import { Row, Col } from "reactstrap";
import Nav from "./Home/nav";
import LeftPanel from "./LeftComponent/left";
import MiddlePanel from "./MiddleComponent/middle";
import RightPanel from "./RightComponent/right";
import Footer from "./Footer/footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <Row>
          <Col md="4" lg="4">
            <LeftPanel />
          </Col>
          <Col md="4"lg="4">
            <MiddlePanel />
          </Col>
          <Col md="4"lg="4">
            <RightPanel />
          </Col>
        </Row>
        <Footer/>
      </div>
    );
  }
}

export default App;
