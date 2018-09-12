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
console.log(props.gif)
  return (
    <Fragment>
      <Col md="8" lg="8" className="progress-styles">
        {/* map over our return for each object in our array */}
        <Row>
          {/* {props.project.map(project => ( */}
            <Col sm="12" md="12" lg="6" xl="12" className="card-styles">
              {/* set up a Link for the card */}

              <Card className={`card${props.index +1} ${props.gif} `} id="test">
              <i onMouseLeave={()=>props.unToggle("static")} onMouseEnter={()=>props.toggle("gif")}id="test2" className="fas fa-play playgif"></i>
                <CardBody>
                 
               
<div>
  
                  
                 </div>
                
            
               <div className="projectContainer-styles"><div><i onClick={()=>props.incresseIndex("Left")} className="fas fa-arrow-left fa-2x"></i>

</div><div><i onClick={()=>props.incresseIndex("Right")} className="fas fa-arrow-right fa-2x"></i>

</div></div>



                    
                </CardBody> 

                <CardLink href={props.project.youtube}>{props.project.youtube}</CardLink>
<CardLink href={props.project.github}>
                  {props.project.github}
                 </CardLink> 

                <Link
                  to={`/projects/${props.project._id}`}
                  style={{ textDecoration: "none" }}
                >
                
                  <Button>View Card</Button>
                </Link>
              </Card>
            </Col>
          {/* ))} */}
        </Row>
      </Col>
    </Fragment>
  );
};
// export our component
export default Project;
