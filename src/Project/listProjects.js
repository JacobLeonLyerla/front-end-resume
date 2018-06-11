// require react
import React, { Fragment } from "react";
import {
  Card,
  Row,
  Col,
  CardText,
  CardTitle,
  CardBody,
  CardImg,
  CardLink,
  Button
} from "reactstrap";
// import Link from react-router-dom
import { Link } from "react-router-dom";
// set up statless component
const Project = props => {
  return (
    <Fragment>
      <Col md="8" lg="7" className="progress-styles">
        {/* map over our return for each object in our array */}
        <Row>
          {props.projects.map(project => (
            <Col sm="12" md="4" lg="3" className="card-styles">
              {/* set up a Link for the card */}

              <Card>
                <CardBody>
                 
                  <CardTitle>{project.title}</CardTitle>
<div>
                  <CardLink href={project.github}>
                  {project.github}
                 </CardLink> 
                 </div>
                  <CardLink href={project.youtube}>{project.youtube}</CardLink>
                  <CardText></CardText>
                  <CardImg src={project.img} />
                </CardBody>
                <Link
                  to={`/projects/${project._id}`}
                  style={{ textDecoration: "none" }}
                >
                
                  <Button>View Card</Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Fragment>
  );
};
// export our component
export default Project;
