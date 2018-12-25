import React from "react";
import { Progress, Label, ListGroupItem, ListGroup } from "reactstrap";

const ProgressBars = () => {
  return (
    //i could use a row and column her but i just used a div instead.
    <div className="progress-styles prof-container">
      <ListGroup>
        <Label className="prof-styles">Proficiencies</Label>
        <div className="list-items">
          <ListGroupItem>React.js</ListGroupItem>
          <ListGroupItem>JavaScript</ListGroupItem>
          <ListGroupItem>HTML/CSS</ListGroupItem>
          <ListGroupItem>LESS</ListGroupItem>
          <ListGroupItem>SASS</ListGroupItem>
          <ListGroupItem>MongoDB</ListGroupItem>
          <ListGroupItem>Mongoose</ListGroupItem>
          <ListGroupItem>Node.js</ListGroupItem>
          <ListGroupItem>Expess.js</ListGroupItem>
          <ListGroupItem>Redux</ListGroupItem>
          <ListGroupItem>React Context</ListGroupItem>
          <ListGroupItem>Reactstrap/Bootstrap</ListGroupItem>
          <ListGroupItem>Animate.css</ListGroupItem>
          <ListGroupItem>Python</ListGroupItem>
          <ListGroupItem>SQL</ListGroupItem>
          <ListGroupItem>C++</ListGroupItem>
          <ListGroupItem>C</ListGroupItem>
        </div>
      </ListGroup>
    </div>
  );
};
export default ProgressBars;
