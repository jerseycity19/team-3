//import React from 'react';
import React, {Component} from 'react';
import { Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
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
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
function NavigationMenu() {
  return (<div>
    <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
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
                  Ressources
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Adcocate
                  </DropdownItem>
                  <DropdownItem>
                    Learning
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
      <Card>
      <NavigationMenu/>
      <CardBody>
      
      <Form className="div-width">
        <FormGroup> 
          <Label for="exampleEmail">User Identification</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        
        <FormGroup>
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
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
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
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </CardBody>
      <CardFooter>
      <div className="footer">
        <Container>
          <Row>
            <Col xs="4">ABOUT</Col>
            <Col xs="4">THE NETWORK</Col>
            <Col xs="4">GET HELP</Col>
          </Row>
          <Row>
            <Col xs="4"><a href="">Mission and History</a></Col>
            <Col xs="4"><a href="#">Partner Networks</a></Col>
            <Col xs="4"><a href="#">Application for Assistance</a></Col>
          </Row>
          <Row>
            <Col xs="4"><a href="#">Geo-location</a></Col>
            <Col xs="4"><a href="#">SAR Sections</a></Col>  
            <Col xs="4"><a href="#">Ressources</a></Col>
          </Row>
          <br/>
          <Row>
            <Col><p>SAR©2019. All Rights Reserved.</p></Col>
          </Row>
          </Container>
      </div>
      </CardFooter>
      </Card>
    </div>
    );
  }
}

export default App;
