import React from "react";
import { ListGroup, ListGroupItem, Col } from "reactstrap";
const ContactInfo = () => {
  return (
    // this is a list group containing all the info in my contact tab, the styling is given the bootstrap css file, i added into the index.

    <ListGroup className="contactList-styles">
      <ListGroupItem>Email: Jacobleonlyerla@gmail.com</ListGroupItem>
      <ListGroupItem>Phone: +1 (928) 362-5877</ListGroupItem>{" "}
      <ListGroupItem>Location: Phoenix, Arizona</ListGroupItem>
      <a
        style={{ color: "white", textDecoration: "none" }}
        href="https://github.com/JacobLeonLyerla"
      >
        <ListGroupItem>
        <i class="fab fa-github-square" /> JacobLeonLyerla
        </ListGroupItem>
      </a>
      <a
        style={{ color: "white", textDecoration: "none" }}
        href="https://www.linkedin.com/in/jacob-lyerla"
      >
        <ListGroupItem>
        <i class="fab fa-linkedin " /><div>Jacob-Lyerla</div>
        </ListGroupItem>
      </a>
    </ListGroup>
  );
};
export default ContactInfo;
