import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
// stateless component nothing needs to be set here
const HomeNav = () => {
  return (
    // this is the main brand or logo for the page
    <Navbar light expand="md">
      <NavbarBrand href="/">Jacob Lyerla</NavbarBrand>
      {/* nav bar set to ml-auto  just set up automatic margins m stand for margin and l is for left, margins
stay consistant */}
      <Nav className="ml-auto" navbar>
        {/* each item has a ref to the site that i want to link to, and so clicking on that will redirect you. */}
        <NavItem>

         <NavLink onClick={()=>window.scrollTo(0,document.body.scrollHeight)
}>About</NavLink>  
 
        </NavItem> <NavItem>
          <NavLink href="https://www.linkedin.com/in/jacob-lyerla" target="_blank" rel="noopener noreferrer">
            Linkedin
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://twitter.com/JLLCoding" target="_blank" rel="noopener noreferrer">Twitter</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://www.youtube.com/channel/UCDaJ3jOVnk67LG0rbky1RGg" target="_blank" rel="noopener noreferrer">
            Youtube
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/JacobLeonLyerla" target="_blank" rel="noopener noreferrer">GitHub</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
export default HomeNav;
