import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from "reactstrap";
import selfie from "../assets/selfie.jpg"
const Header = () => {
  return (
    <Col md="8" lg="8">
    <Card>
      <CardImg
      className="selfie"
        top
        width="100%"
        src={selfie}
        alt="Picture of a wizard reading."
      />
      <CardBody>
        <CardTitle>About Me</CardTitle>

        <CardText>
        I studied computer science in college, learning starting with C# applications than learning C++, mostly learning the fundamental skills of problem solving, where the coding language is just a tool we use to solve problems. <br /><br/>
        currently I try to work with people with all different ways of solving problems. Moving forward, I am interested in working for a company that values teamwork and communication, working for a company that would allow me to grow as a developer.
        </CardText>
      </CardBody>
    </Card>
    </Col>
  );
};

export default Header;
