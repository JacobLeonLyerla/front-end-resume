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

const HomeNav = props =>{
return(
    <Navbar  light expand="md">
    <NavbarBrand href="/">Jacob Leon Lyerla</NavbarBrand>

      <Nav className="ml-auto" navbar>
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
export default HomeNav;