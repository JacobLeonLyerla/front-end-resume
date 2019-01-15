// require react
import React, { Fragment } from "react";
import {
  Card,
  Row,
  Col,
  CardBody,
  ListGroup,
  ListGroupItem,

} from "reactstrap";
import Bubbles from "./loading"

// set up statless component

const Project = props => {
  return (
    <Fragment>
      {props.project === undefined ? <Bubbles/>:(
      <Col md="8" lg="8" className="progress-styles">
        {/* map over our return for each object in our array */}
        <Row>
        
          <Col sm="12" md="12" lg="6" xl="12" className="card-styles">
            {/* set up a Link for the card */}
            <Card className={`card${props.index + 1} ${props.gif}${props.index +1} `} id="test">
             <div>{props.gif ===""?(

                  <i
                onClick={() => props.toggle("gif")}
                id="test2"
                className="fas fa-play playgif"
              />
              ):(     <i
                onClick={() => props.toggle("")}
                id="test2"
                className="fas fa-pause playgif"
              />)}</div> 
            
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
                  <ListGroupItem>View Deployed Site</ListGroupItem>
                </a>
                <a className="link-styles" href={props.project.youtube} >{" "}
               
      <ListGroupItem>{props.project.youtube ==="No video yet"?(<div>Video Coming Soon</div>):(<div>View How it Was Made</div>)}</ListGroupItem>
             </a >
                <a className="link-styles" href={props.project.github}>
                  <ListGroupItem>View The Code</ListGroupItem>
                </a>
              </div>
            </ListGroup>{" "}
          </Col>
        </Row>
      </Col>
  )}
    </Fragment>
  );
};
// export our component
export default Project;
