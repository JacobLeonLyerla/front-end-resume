import React from "react";

import { Label,ListGroupItem,Col, ListGroup } from "reactstrap";
const ProjectDependencies = ({ project }) => {
  const { dependencies, id } = project;


  return (
    <Col md="8" lg="8"  className="progress-styles prof-container dependencies-container" >
     <ListGroup>
      <Label className="prof-styles">Technologies</Label>
      <div className="list-techs list-items">
        {
     
       
          dependencies.map((dependency) => (
              <ListGroupItem>{dependency}</ListGroupItem>
            ))
          
        }
      </div></ListGroup>
    </Col>
  );
};

export default ProjectDependencies;
