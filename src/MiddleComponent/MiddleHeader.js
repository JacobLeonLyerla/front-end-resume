import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const Header = () => {
  return (
    <Card>
    <CardImg top width="100%" src="https://img00.deviantart.net/21ea/i/2009/302/a/2/wizard_by_stefana_tserk.jpg" alt="Card image cap" />
    <CardBody>
      <CardTitle>About Me</CardTitle>
  
      <CardText>Some sick ass coder who gets all the ladies, who is hella good at react and being a fucking baller in the paint, massive less and sass skills, reactstrap i got that shit, look at ow blinging this site is boooi.</CardText>
      <Button>Contact me</Button>
    </CardBody>
  </Card>
  );
};

export default Header;