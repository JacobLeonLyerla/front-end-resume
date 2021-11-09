import React from "react";

import "../css/project.css"
import { Card, Row, Col, CardBody, ListGroup, ListGroupItem } from "reactstrap";

const ProjectImage = ({ project,leftArrow,rightArrow }) => {
  const { githubFrontend, id, webpage,githubBackend } = project;
  return (
    <Col md="8" lg="8" className="progress-styles project-image">
      
      {/* map over our return for each object in our array */}
      <Row>
        <Col sm="12" md="12" lg="6" xl="12" className="card-styles">
       
          {/* set up a Link for the card */}
          <Card className={`card${id}`} id="test">
            
            <CardBody>
             {leftArrow()}  <div />{rightArrow()}
            </CardBody>
            
          </Card>
          <ListGroup>
            <div className="links">
              <a className="link-styles" target="_blank" href={webpage}>
                <ListGroupItem>View Deployed Site</ListGroupItem>
              </a>
              <a className="link-styles" target="_blank" href={githubFrontend}>
                <ListGroupItem>Front-End Code</ListGroupItem>
              </a>
              {githubBackend?<a className="link-styles" target="_blank" href={githubBackend}>
                <ListGroupItem>Back-End Code</ListGroupItem>
              </a> :null}
            </div>
          </ListGroup>{" "}
        </Col>
      </Row>
    </Col>
  );
};

export default ProjectImage;
