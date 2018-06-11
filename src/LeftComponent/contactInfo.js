import React from "react";
import { ListGroup, ListGroupItem ,Col} from "reactstrap";
const ContactInfo = () => {
  return (
    // this is a list group containing all the info in my contact tab, the styling is given the bootstrap css file, i added into the index.
  
      <ListGroup>
        <ListGroupItem>Email: umasour@yahoo.com</ListGroupItem>
        <ListGroupItem>Phone: 1-555-555-5555</ListGroupItem>
        <ListGroupItem>
          Github: https://github.com/JacobLeonLyerla{" "}
        </ListGroupItem>
        <ListGroupItem>Linkedin: https://linkedin.com</ListGroupItem>
        <ListGroupItem>Twitter: https://twitter.com</ListGroupItem>
      </ListGroup>
    
  );
};
export default ContactInfo;
