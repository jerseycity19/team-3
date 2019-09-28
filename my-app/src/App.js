//import React from 'react';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
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
<Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
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

        <FormGroup>
          <Label for="exampleSelect">Age Range</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>20-29</option>
            <option>30-39</option>
            <option>40-49</option>
            <option>50-59</option>
            <option>60-69</option>
            <option>70+</option>
          </Input>
        </FormGroup>

        <FormGroup tag="fieldset">
          <label> Gender</label>
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

        <FormGroup>
          <Label for="exampleSelect"> Country </Label>
          <Input type="select" name="country" id="exampleSelect">
            <option>Asia </option>
            <option>Europe</option>
            <option>North America</option>
            <option>South America</option>

          </Input>
        </FormGroup>


        <FormGroup>
        <label> Professional Language</label>
        <Input
          style={{}}
          onChangeText={(language) => this.setState({ language })}
          value={this.state.language}/>
                    </FormGroup>

                    <FormGroup>
          <Label for="employment">Employment Status </Label>
          <Input type="select" name="Employment Status" id="employment">
            <option>Part-Time </option>
            <option>Full-Time</option>
            <option>Part-time & No Contract</option>
            <option> Unemployed</option>

          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="Disciple"> Discipline Area </Label>
          <Input type="select" name="disciple" id="Disciple">
            <option>Natural Sciences</option>
            <option>Social Sciences</option>
            <option>Arts and Humanities</option>
            <option> Engineering</option>

          </Input>
        </FormGroup>


        <FormGroup>
          <Label for="Sensitivity"> Sensitivity of Work </Label>
          <Input type="select" name="Sensitivity" id="Sensitivity">
            <option>Not very sensitive</option>
            <option>Somewhat sensitive</option>
            <option>More sensitive than most</option>
            <option>Extremely sensitive</option>

          </Input>
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
