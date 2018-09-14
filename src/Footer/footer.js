import React from "react";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer-styles">
      <NavbarBrand href="/" />

      <Nav>
        <NavItem>
          <NavLink href="https://www.linkedin.com/in/jacob-lyerla">
            <i class="fab fa-linkedin" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://twitter.com/JLLCoding">
            <i class="fab fa-twitter-square" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://www.youtube.com/channel/UCDaJ3jOVnk67LG0rbky1RGg">
            <i class="fab fa-youtube-square" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/JacobLeonLyerla">
            <i class="fab fa-github-square" />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};
export default Footer;
