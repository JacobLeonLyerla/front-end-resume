import React, { Component } from 'react';
import './App.css';
import './css/index.css'
import { Row, Col } from 'reactstrap';
import Nav from './Home/nav'
import LeftPannel from './LeftComponent/left'
import MiddlePannel from './MiddleComponent/middle'


class App extends Component {
  render() {
    return (
      <div className="App">
       
     <Nav/>
     
     <Row>
       <Col lg="4">
<LeftPannel/>
</Col>
<Col lg="4">
<MiddlePannel/>
</Col>
</Row>
      </div>
    );
  }
}

export default App;
