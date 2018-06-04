import React from "react"
import{Link} from "react-router-dom"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

const Footer = props =>{
return(
    <Navbar className="footer-styles"  light expand="md">
    <NavbarBrand href="/"></NavbarBrand>

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
)

}
export default Footer;