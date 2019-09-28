import React, { Component } from 'react';

import SARlogo from '../SARlogo.png'
import '../App.css';
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
  DropdownItem
} from 'reactstrap';
class NavigationMenu extends Component {

  render() {
    return (
      <div>
        <img className="logo_img" src={SARlogo} />
        <Navbar color="dark" dark expand="lg" >
          <NavbarBrand href="/">Scholars At Risk</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" Navbar>
              <NavItem>
                <NavLink href='https://www.scholarsatrisk.org/'>SAR Site</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Data Analytics</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Donation</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavigationMenu;