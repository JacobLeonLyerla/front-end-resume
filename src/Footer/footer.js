import React from "react";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer-styles">
      <NavbarBrand href="/" />

      <Nav>
        <NavItem>
          <NavLink>
        <i class="fas fa-map-marker-alt"> Phoenix,AZ</i>
        </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
          <i class="fas fa-phone-square"> (928) 362-5877</i>
        </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
        <i class="fas fa-envelope-square"> Jacobleonlyerla@gmail.com</i>
        </NavLink>
        </NavItem>
        <NavItem>
          
          <NavLink href="https://www.linkedin.com/in/jacob-lyerla" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://twitter.com/JLLCoding"target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter-square" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://www.youtube.com/channel/UCDaJ3jOVnk67LG0rbky1RGg"target="_blank" rel="noopener noreferrer">
            <i class="fab fa-youtube-square" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/JacobLeonLyerla" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github-square" />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};
export default Footer;
