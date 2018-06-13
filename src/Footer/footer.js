import React from "react";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer-styles">
      <NavbarBrand href="/" />

      <Nav>
        <NavItem>
          <NavLink href="http://linkedin.com">
            <i class="fab fa-linkedin" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="http://www.twitter.com">
            <i class="fab fa-twitter-square" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="http://youtube.com">
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
