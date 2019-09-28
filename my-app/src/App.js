import React, { Component, Suspense } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
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
        <Card>
          <CardBody>
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
                {/* <Input type="select" name="country" id="exampleSelect"> */}

                <FormGroup check>
                  <Label check>
                    {/* COPY LINE BELOW */}
                    <Input type="radio" name="userid" />{' '}<Trans i18nKey="country-options.china"></Trans></Label>
                </FormGroup>
                <option><Trans i18nKey="country-options.turkey"></Trans></option>
                <option><Trans i18nKey="country-options.america"></Trans></option>
                <option><Trans i18nKey="country-options.other"></Trans></option>
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

              {/* start adding back page questions below: */}
              {/* <FormGroup>
                <Label for="Sensitivity"><Trans i18nKey="sensitivity"></Trans></Label>
                <Input type="select" name="Sensitivity" id="Sensitivity">
                  <option><Trans i18nKey="sensitivity-options.not-very"></Trans></option>
                  <option><Trans i18nKey="sensitivity-options.somewhat"></Trans></option>
                  <option><Trans i18nKey="sensitivity-options.more"></Trans></option>
                  <option><Trans i18nKey="sensitivity-options.extremely"></Trans></option>
                </Input>
              </FormGroup> */}
              <FormGroup>
                <label><Trans i18nKey="comments"></Trans></label>
                <Input
                  style={{}}
                  onChangeText={(comments) => this.setState({ comments })}
                  value={this.state.comments} />
              </FormGroup>

              <Button>Submit</Button>
            </Form>
            <br /><br />

            <CardFooter>
              <div className="footer">
                <Container>
                  <Row>
                    <Col xs="4">ABOUT</Col>
                    <Col xs="4">THE NETWORK</Col>
                    <Col xs="4">GET HELP</Col>
                  </Row>
                  <Row>
                    <Col xs="4"><a href="https://www.scholarsatrisk.org/about/">Mission and History</a></Col>
                    <Col xs="4"><a href="https://www.scholarsatrisk.org/the-network/">Partner Networks</a></Col>
                    <Col xs="4"><a href="https://www.scholarsatrisk.org/get-help/">Application for Assistance</a></Col>
                  </Row>
                  <Row>
                    <Col xs="4"><a href="https://www.scholarsatrisk.org/scholars-at-risk-europe/">Geo-location</a></Col>
                    <Col xs="4"><a href="https://www.scholarsatrisk.org/sar-sections/">SAR Sections</a></Col>
                    <Col xs="4"><a href="https://www.scholarsatrisk.org/scholar-resources/">Ressources</a></Col>
                  </Row>
                  <br />
                  <Row>
                    <Col><p>SAR©2019. All Rights Reserved.</p></Col>
                  </Row>
                </Container>
              </div>
            </CardFooter>
          </CardBody>
        </Card>
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
  const changeLanguage = lng => {
    this.props.i18n.changeLanguage(lng);
  };

  return (<div>
    <Navbar color="light" light expand="lg" >
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href='https://www.scholarsatrisk.org/'>SAR Site</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login">Data Analytics</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Donation</NavLink>
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
                Learning
                  </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Learning
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
        <NavigationMenu t={this.props.t} i18n={this.props.i18n} />
        <InputForm />
        {/* <Form className="div-width">
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
                <Input type="radio" name="age" />{' '}
                30-39
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="age" />{' '}
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
                <Input type="radio" name="country" />{' '}
                United Kingdom
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="country" />{' '}
                Turkey
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="country" />{' '}
                Canada
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="country" />{' '}
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
                <Input type="radio" name="country" />{' '}
                Full Time
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="country" />{' '}
                Part Time Without Contract
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="country" />{' '}
                Full Time Without Contract
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="country" />{' '}
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
                <Input type="radio" name="discipline" />{' '}
                Social Sciences
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="discipline" />{' '}
                Arts and Humanities
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="discipline" />{' '}
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
              value={this.state.language} />
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
                <Input type="radio" name="Sensitivity" />{' '}
                Somewhat sensitive
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="Sensitivity" />{' '}
                More sensitive than most
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="Sensitivity" />{' '}
                EExtremely sensitive
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="Sensitivity" />{' '}
                Law/Human Rights
            </Label>
            </FormGroup>
          </FormGroup> */}
      </div>
    )
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
      <select id="languageSelect" onChange={(e) => changeLanguage(e.target.value)} >
        <option value="en">English</option>
        <option value="de">German</option>
        {/* <option value="C++" onChange={this.change}>C++</option> */}
      </select>
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

