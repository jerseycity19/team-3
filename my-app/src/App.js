import React, { Component, Suspense } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
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
  DropdownItem
} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// ===============================================COMPONENTS=========================================================

class IForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      agerange: "",
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // handleRadioChange = (event) => {
  //   this.setState({
  //       [event.target.name]: event.target.value
  //   });
  // }

  render() {
    const { t, i18n } = this.props;
    const { id, agerange } = this.state;

    return (
      <div>
        <h2>{t('title')}YERRRRRRRS</h2>
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
                <Input type="radio" name="userid" />{' '}
                Administrator
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="userid" />{' '}
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
                <Input type="radio" name="gender" />{' '}
                Femal
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="gender" />{' '}
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
              value={this.state.language} />
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
          <Button>Submit</Button>
        </Form>
        {/* <form>
        <Trans>
          {t('id')}:
          <input type="text" name="name" />
        </Trans>
        <Trans>
          {t('age-range')}:
          <input type="text" name="age-range" />
        </Trans>
        <input type="submit" value="Submit" />
        </form> */}
      </div>
    );
  }
}
const InputForm = withTranslation()(IForm);

function NavigationMenu() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler />
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

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

class Main extends Component {
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
        <NavigationMenu />
        <InputForm t={this.props.t} i18n={this.props.i18n} />
      </div>
    );
  }
}

// ===========================================PAGES=============================================================

// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <Main t={t} i18n={i18n} />
      <button onClick={() => changeLanguage('de')}>de</button>
      <button onClick={() => changeLanguage('en')}>en</button>
      {/* <div>{t('description.part2')}</div> */}
    </div>
  );
}

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}

