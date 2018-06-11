import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
// stateless component nothing needs to be set here
const HomeNav = () => {
  return (
// this is the main brand or logo for the page
    <Navbar light expand="md">
      <NavbarBrand href="/">Jacob Leon Lyerla</NavbarBrand>
{/* nav bar set to ml-auto  just set up automatic margins m stand for margin and l is for left, margins
stay consistant */}
      <Nav className="ml-auto" navbar>
 {/* each item has a ref to the site that i want to link to, and so clicking on that will redirect you. */}
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
export default HomeNav;
