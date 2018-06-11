import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from "reactstrap";

const Header = () => {
  return (
    <Col md="4" lg="4">
    <Card>
      <CardImg
        top
        width="100%"
        src="https://img00.deviantart.net/21ea/i/2009/302/a/2/wizard_by_stefana_tserk.jpg"
        alt="Picture of a wizard reading."
      />
      <CardBody>
        <CardTitle>About Me</CardTitle>

        <CardText>
          I am a LambdaSchool student, located in the southwest.<br />
          I enjoy working in react, using reactstrap and other stuff to improve
          my code,<br />
          this site was designed with less, react, with reactstrap, along with
          axios.<br />
          I used design-seeds to choose my color pallet.
        </CardText>
      </CardBody>
    </Card>
    </Col>
  );
};

export default Header;
