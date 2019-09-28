//import React from 'react';
import React, {Component} from 'react';
import logo from './logo.svg';
import SARlogo from './SARlogo.png'
import './App.css';
import Image from 'react-bootstrap/Image';
import {
  Col,
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
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function NavigationMenu() {
  return (<div>
<Navbar color="light"  >
          <NavbarBrand 
           href="/">
           <Image width={100}
    height={75} src= {SARlogo} />
    <p style = {{ fontSize: 15 }} >
      Scholars at Risk
    </p>
          </NavbarBrand>
          <NavbarToggler/>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        </div>);
}
class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
    <div className="App">
      <NavigationMenu/>
      
      <Form className="div-width">
      <FormGroup tag="fieldset">
          <legend>User Identification</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="userid" />{' '}
             Scholar
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="userid" />{' '}
              Student
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="userid"  />{' '}
              Administrator
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="userid"/>{' '}
              Non-University
            </Label>
          </FormGroup>
        </FormGroup>



        <FormGroup tag="fieldset">
          <legend>Age Range</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="age" />{' '}
              20-29
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="age"  />{' '}
              30-39
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="age"   />{' '}
              40-49
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="age" />{' '}
              50-59
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="age" />{' '}
              60-69
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="age" />{' '}
              70+
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Gender</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="gender" />{' '}
             Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="gender"  />{' '}
             Femal
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="gender"  />{' '}
              Non-Binary
            </Label>
          </FormGroup>
          
        </FormGroup>



        <FormGroup tag="fieldset">
          <legend> Country </legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="country" />{' '}
             United States
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="country"/>{' '}
             United Kingdom
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="country"  />{' '}
              Turkey
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="country"  />{' '}
              Canada
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="country"  />{' '}
              China
            </Label>
          </FormGroup>
        </FormGroup>

        
        <FormGroup tag="fieldset">
          <legend> Employment </legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="country" />{' '}
             Part Time
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="country"/>{' '}
             Full Time
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="country"  />{' '}
              Part Time Without Contract
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="country"  />{' '}
              Full Time Without Contract
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="country"  />{' '}
              Unemployed
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend> Discipline Area </legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="discipline" />{' '}
              Natural Sciences
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="discipline"/>{' '}
              Social Sciences
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="discipline"  />{' '}
              Arts and Humanities
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="discipline"  />{' '}
              Engineering
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="discipline" />{' '}
              Law/Human Rights
            </Label>
          </FormGroup>
        </FormGroup>













        <FormGroup>
        <legend> Professional Language</legend>
        <Input
          style={{}}
          onChangeText={(language) => this.setState({ language })}
          value={this.state.language}/>
                    </FormGroup>

                    

      


        



        <FormGroup tag="fieldset">
          <legend> Sensitivity of Work </legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="Sensitivity" />{' '}
              Not very sensitive
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="Sensitivity"/>{' '}
              Somewhat sensitive
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="Sensitivity"  />{' '}
              More sensitive than most
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="Sensitivity"  />{' '}
              EExtremely sensitive
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="Sensitivity"/>{' '}
              Law/Human Rights
            </Label>
          </FormGroup>
        </FormGroup>






































        {/* <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        
        
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup> */}
        <Button>Submit</Button>
      </Form>
    </div>
    );
  }
}

export default App;
