import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const Header = () => {
  return (
    <Card>
    <CardImg top width="100%" src="https://img00.deviantart.net/21ea/i/2009/302/a/2/wizard_by_stefana_tserk.jpg" alt="Card image cap" />
    <CardBody>
      <CardTitle>About Me</CardTitle>
  
      <CardText>I am a LambdaSchool student, located in the southwest.<br/>
      I enjoy working in react, using reactstrap and other stuff to improve my code,<br/>
      this site was designed with less, react, with reactstrap, along with axios.<br/>
      I used design-seeds to choose my color pallet.
      </CardText>
    </CardBody>
  </Card>
  );
};

export default Header;