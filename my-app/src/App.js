import React, { Component, Suspense } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import NavigationMenu from './header_footer/header';
import {
  Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import SARlogo from './SARlogo.png'
import './App.css';
import Image from 'react-bootstrap/Image';
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
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Login from './Login';
import Data from './Data';
import FormDone from './FormDone';
import Mainpage from './Mainpage';
import FooterComponent from './header_footer/footer';

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

  render() {
    const { t, i18n } = this.props;
    const { id, agerange } = this.state;

    return (
      <div>
        <br />
        <h2>{t('title')}</h2>
        <br />

        <Card>
          <CardBody>
            <br />
            <Form className="div-width">
              <FormGroup tag="fieldset">
                <legend><Trans i18nKey="user-id"></Trans></legend>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="userid" value={true} />{' '}
                    <Trans i18nKey="user.scholar"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="userid" />{' '}
                    <Trans i18nKey="user.student"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="userid" />{' '}
                    <Trans i18nKey="user.administrator"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="userid" />{' '}
                    <Trans i18nKey="user.non-university"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>


              <FormGroup tag="fieldset">
                <legend><Trans i18nKey="age-range"></Trans></legend>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="age" />{' '}
                    <Trans i18nKey="age-options.twenties"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="age" />{' '}
                    <Trans i18nKey="age-options.thirties"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="age" />{' '}
                    <Trans i18nKey="age-options.forties"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="age" />{' '}
                    <Trans i18nKey="age-options.fifties"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="age" />{' '}
                    <Trans i18nKey="age-options.sixties"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="age" />{' '}
                    <Trans i18nKey="age-options.other"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup tag="fieldset">
                <legend><Trans i18nKey="gender"></Trans></legend>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="gender" />{' '}
                    <Trans i18nKey="gender-options.male"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="gender" />{' '}
                    <Trans i18nKey="gender-options.female"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="gender" />{' '}
                    <Trans i18nKey="gender-options.non-binary"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="gender" />{' '}
                    <Trans i18nKey="gender-options.other"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup tag="fieldset">
                <legend><Trans i18nKey="country"></Trans></legend>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="country" />
                    <Trans i18nKey="country-options.china"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="country" />{' '}
                    <Trans i18nKey="country-options.turkey"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="country" />{' '}
                    <Trans i18nKey="country-options.america"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="country" />{' '}
                    <Trans i18nKey="country-options.other"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup>
                <legend><Trans i18nKey="language"></Trans></legend>
                <Input
                  style={{}}
                  onChangeText={(language) => this.setState({ language })}
                  value={this.state.language} />
              </FormGroup>

              <FormGroup tag="fieldset">
                <legend><Trans i18nKey="status"></Trans></legend>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="status" />
                    <Trans i18nKey="status-options.part-time"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="status" />{' '}
                    <Trans i18nKey="status-options.full-time"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="status" />{' '}
                    <Trans i18nKey="status-options.part-time-no-contract"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="status" />{' '}
                    <Trans i18nKey="status-options.unemployed"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>


              <FormGroup tag="fieldset">
                <legend><Trans i18nKey="discipline"></Trans></legend>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="discipline" />
                    <Trans i18nKey="discipline-options.natural-sciences"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="discipline" />{' '}
                    <Trans i18nKey="discipline-options.social-sciences"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="discipline" />{' '}
                    <Trans i18nKey="discipline-options.arts-and-humanities"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="discipline" />{' '}
                    <Trans i18nKey="discipline-options.engineering"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup tag="fieldset">
                <legend><Trans i18nKey="sensitivity"></Trans></legend>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="sensitivity" />
                    <Trans i18nKey="sensitivity-options.not-very"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="sensitivity" />{' '}
                    <Trans i18nKey="sensitivity-options.somewhat"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="sensitivity" />{' '}
                    <Trans i18nKey="sensitivity-options.more"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="sensitivity" />{' '}
                    <Trans i18nKey="sensitivity-options.extremely"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup tag="fieldset">
                <legend><Trans i18nKey="q1"></Trans></legend>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q1" />
                    <Trans i18nKey="q-options.never"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q1" />{' '}
                    <Trans i18nKey="q-options.sometimes"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q1" />{' '}
                    <Trans i18nKey="q-options.frequently"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q1" />{' '}
                    <Trans i18nKey="q-options.all-the-time"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup tag="fieldset">
                <legend><Trans i18nKey="q2"></Trans></legend>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q2" />
                    <Trans i18nKey="q-options.never"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q2" />{' '}
                    <Trans i18nKey="q-options.sometimes"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q2" />{' '}
                    <Trans i18nKey="q-options.frequently"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q2" />{' '}
                    <Trans i18nKey="q-options.all-the-time"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup tag="fieldset">
                <legend><Trans i18nKey="q3"></Trans></legend>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q3" />
                    <Trans i18nKey="q-options.never"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q3" />{' '}
                    <Trans i18nKey="q-options.sometimes"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q3" />{' '}
                    <Trans i18nKey="q-options.frequently"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q3" />{' '}
                    <Trans i18nKey="q-options.all-the-time"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup tag="fieldset">
                <legend><Trans i18nKey="q4"></Trans></legend>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q4" />
                    <Trans i18nKey="q-options.never"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q4" />{' '}
                    <Trans i18nKey="q-options.sometimes"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q4" />{' '}
                    <Trans i18nKey="q-options.frequently"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q4" />{' '}
                    <Trans i18nKey="q-options.all-the-time"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup tag="fieldset">
                <legend><Trans i18nKey="q5"></Trans></legend>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q5" />
                    <Trans i18nKey="q-options.never"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q5" />{' '}
                    <Trans i18nKey="q-options.sometimes"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q5" />{' '}
                    <Trans i18nKey="q-options.frequently"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q5" />{' '}
                    <Trans i18nKey="q-options.all-the-time"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup tag="fieldset">
                <legend><Trans i18nKey="q6"></Trans></legend>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q6" />
                    <Trans i18nKey="q-options.never"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q6" />{' '}
                    <Trans i18nKey="q-options.sometimes"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q6" />{' '}
                    <Trans i18nKey="q-options.frequently"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q6" />{' '}
                    <Trans i18nKey="q-options.all-the-time"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup tag="fieldset">
                <legend><Trans i18nKey="q7"></Trans></legend>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q7" />
                    <Trans i18nKey="q-options.never"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q7" />{' '}
                    <Trans i18nKey="q-options.sometimes"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q7" />{' '}
                    <Trans i18nKey="q-options.frequently"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check align="left" style={{ left: "35%" }}>
                  <Label check>
                    <Input type="radio" name="q7" />{' '}
                    <Trans i18nKey="q-options.all-the-time"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup>
                <legend><Trans i18nKey="comments"></Trans></legend>
                <Input
                  style={{ height: "150px" }}
                  onChangeText={(comments) => this.setState({ comments })}
                  value={this.state.comments} />
              </FormGroup>
            </Form>
              <br />
              <a href="/formdone"><Button>Submit</Button></a>
              <br /><br />
            <br /><br />

            <CardFooter>
              <FooterComponent />
            </CardFooter>
          </CardBody>
        </Card>
      </div>
    );
  }
}
const InputForm = withTranslation()(IForm);
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
    const changeLanguage = lng => {
      this.props.i18n.changeLanguage(lng);
    };
    return (
      <div className="App">
        <NavigationMenu />
        <div align="right">
          <select id="languageSelect" onChange={(e) => changeLanguage(e.target.value)} >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="sn">Spanish</option>
          </select>
        </div>
        <InputForm />
        {}
      </div>
    )
  }
}

// ===========================================PAGES=============================================================

// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      
      <Main t={t} i18n={i18n} />
    </div>
  );
}

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Mainpage />
            </Route>
            <Route exact path="/form">
              <Page />
            </Route>
            <Route exact path="/formdone">
              <FormDone />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/data">
              <Data />
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}

