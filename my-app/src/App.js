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
        <h2>{t('title')} YERRRRRRRS</h2>
        <Form className="div-width">
          <FormGroup tag="fieldset">
            <legend><Trans i18nKey="user-id"></Trans></legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="userid" />{' '}
                <Trans i18nKey="user.scholar"></Trans>
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="userid" />{' '}
                <Trans i18nKey="user.student"></Trans>
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="userid" />{' '}
                <Trans i18nKey="user.administrator"></Trans>
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="userid" />{' '}
                <Trans i18nKey="user.non-university"></Trans>
            </Label>
            </FormGroup>
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect"><Trans i18nKey="age-range"></Trans></Label>
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
            <label><Trans i18nKey="gender"></Trans></label>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="gender" />{' '}
                <Trans i18nKey="gender-options.male"></Trans>
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="gender" />{' '}
                <Trans i18nKey="gender-options.female"></Trans>
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="gender" />{' '}
                <Trans i18nKey="gender-options.non-binary"></Trans>
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="gender" />{' '}
                <Trans i18nKey="gender-options.other"></Trans>
            </Label>
            </FormGroup>

          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect"><Trans i18nKey="country"></Trans></Label>
            <Input type="select" name="country" id="exampleSelect">
              <option><Trans i18nKey="country-options.china"></Trans></option>
              <option><Trans i18nKey="country-options.turkey"></Trans></option>
              <option><Trans i18nKey="country-options.america"></Trans></option>
              <option><Trans i18nKey="country-options.other"></Trans></option>
            </Input>
          </FormGroup>

          <FormGroup>
            <label><Trans i18nKey="language"></Trans></label>
            <Input
              style={{}}
              onChangeText={(language) => this.setState({ language })}
              value={this.state.language} />
          </FormGroup>

          <FormGroup>
            <Label for="status">Employment Status </Label>
            <Input type="select" name="Employment Status" id="employment">
              <option><Trans i18nKey="status-options.part-time"></Trans></option>
              <option><Trans i18nKey="status-options.full-time"></Trans></option>
              <option><Trans i18nKey="status-options.part-time-no-contract"></Trans></option>
              <option><Trans i18nKey="status-options.part-time-unemployed"></Trans></option>

            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="Disciple"><Trans i18nKey="discipline"></Trans></Label>
            <Input type="select" name="disciple" id="Disciple">
              <option><Trans i18nKey="discipline-options.natural-sciences"></Trans></option>
              <option><Trans i18nKey="discipline-options.social-sciences"></Trans></option>
              <option><Trans i18nKey="discipline-options.arts-and-humanities"></Trans></option>
              <option><Trans i18nKey="discipline-options.engineering"></Trans></option>

            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="Sensitivity"><Trans i18nKey="sensitivity"></Trans></Label>
            <Input type="select" name="Sensitivity" id="Sensitivity">
              <option><Trans i18nKey="sensitivity-options.not-very"></Trans></option>
              <option><Trans i18nKey="sensitivity-options.somewhat"></Trans></option>
              <option><Trans i18nKey="sensitivity-options.more"></Trans></option>
              <option><Trans i18nKey="sensitivity-options.extremely"></Trans></option>
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
      <button onClick={() => changeLanguage('de')}>de</button>
      <button onClick={() => changeLanguage('en')}>en</button>
      <Main t={t} i18n={i18n} />
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

