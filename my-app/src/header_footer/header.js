import React, {Component} from 'react';

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
class NavigationMenu extends Component{
    
    render() {
        return(
        <div>
      <img className="logo_img" src={SARlogo} />
      <Navbar color="dark" dark expand="lg" >
            <NavbarBrand href="/">Scholars At<br/> Risk</NavbarBrand>
            <NavbarToggler/>
            <Collapse navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Partners</NavLink>
                </NavItem> 
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Donation</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Language
                  </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Spanish
                    </DropdownItem>
                    <DropdownItem divider />  
                    <DropdownItem>
                      French
                    </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                      German
                  </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
    }
}
export default NavigationMenu;
// function NavigationMenu() {
//     return (<div>
//       <img className="logo_img" src={SARlogo} />
//       <Navbar color="dark" light expand="lg" >
//             <NavbarBrand href="/">Scholars At<br/> Risk</NavbarBrand>
//             <NavbarToggler/>
//             <Collapse navbar>
//               <Nav className="ml-auto" navbar>
//                 <NavItem>
//                   <NavLink href="/components/">About</NavLink>
//                 </NavItem>
//                 <NavItem>
//                   <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
//                 </NavItem>
//                 <NavItem>
//                   <NavLink href="https://github.com/reactstrap/reactstrap">Partners</NavLink>
//                 </NavItem> 
//                 <NavItem>
//                   <NavLink href="https://github.com/reactstrap/reactstrap">Donation</NavLink>
//                 </NavItem>
//                 <UncontrolledDropdown nav inNavbar>
//                   <DropdownToggle nav caret>
//                     Language
//                   </DropdownToggle>
//                     <DropdownMenu right>
//                       <DropdownItem>
//                         Spanish
//                     </DropdownItem>
//                     <DropdownItem divider />  
//                     <DropdownItem>
//                       French
//                     </DropdownItem>
//                   <DropdownItem divider />
//                   <DropdownItem>
//                       German
//                   </DropdownItem>
//                     </DropdownMenu>
//                   </UncontrolledDropdown>
//                 </Nav>
//               </Collapse>
//             </Navbar>
//           </div>);
//       }