import React from "react";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Footer = props => {
  return (
    <Navbar className="footer-styles" light expand="md">
      <NavbarBrand href="/" />

      <Nav>
        <NavItem>
          <NavLink href="http://linkedin.com">Linkedin</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="http://www.twitter.com">Twitter</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="http://youtube.com">Youtube</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/JacobLeonLyerla">GitHub</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
export default Footer;
