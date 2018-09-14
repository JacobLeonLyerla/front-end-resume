// require react
import React, { Fragment } from "react";
import {
  Card,
  Row,
  Col,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardLink
} from "reactstrap";

// import Link from react-router-dom
import { Link } from "react-router-dom";
// set up statless component

const Project = props => {
  console.log(props.gif);
  return (
    <Fragment>
      <Col md="8" lg="8" className="progress-styles">
        {/* map over our return for each object in our array */}
        <Row>
          {/* {props.project.map(project => ( */}
          <Col sm="12" md="12" lg="6" xl="12" className="card-styles">
            {/* set up a Link for the card */}
            <Card className={`card${props.index + 1} ${props.gif} `} id="test">
              <i
                onMouseLeave={() => props.unToggle("static")}
                onMouseEnter={() => props.toggle("gif")}
                id="test2"
                className="fas fa-play playgif"
              />
              <CardBody>
                <div />

                <div className="projectContainer-styles">
                  <div>
                    <i
                      onClick={() => props.incresseIndex("Left")}
                      className="fas fa-arrow-left fa-2x"
                    />
                  </div>
                  <div>
                    <i
                      onClick={() => props.incresseIndex("Right")}
                      className="fas fa-arrow-right fa-2x"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
            <ListGroup>
              <div className="links">
                <a className="link-styles" href={props.project.webpage}>
                  {" "}
                  <ListGroupItem>{props.project.webpage}</ListGroupItem>
                </a>
                <a className="link-styles" href={props.project.youtube} >{" "}
               
                  <ListGroupItem>{props.project.youtube}</ListGroupItem>
             </a >
                <a className="link-styles" href={props.project.github}>
                  <ListGroupItem>{props.project.github}</ListGroupItem>
                </a>
              </div>
            </ListGroup>{" "}
          </Col>
        </Row>
      </Col>
    </Fragment>
  );
};
// export our component
export default Project;
