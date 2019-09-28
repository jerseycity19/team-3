import React, { Component, Suspense } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import NavigationMenu from './header_footer/header';
import {Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText} from 'reactstrap';
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


              <FormGroup tag="fieldset">
                <legend><Trans i18nKey="age-range"></Trans></legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="age" />{' '}
                    <Trans i18nKey="age-options.twenties"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="age" />{' '}
                    <Trans i18nKey="age-options.thirties"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="age" />{' '}
                    <Trans i18nKey="age-options.forties"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="age" />{' '}
                    <Trans i18nKey="age-options.fifties"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="age" />{' '}
                    <Trans i18nKey="age-options.sixties"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="age" />{' '}
                    <Trans i18nKey="age-options.other"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>

              {/* <FormGroup>
                <Label for="exampleSelect"><Trans i18nKey="age-range"></Trans></Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>20-29</option>
                  <option>30-39</option>
                  <option>40-49</option>
                  <option>50-59</option>
                  <option>60-69</option>
                  <option>70+</option>
                </Input>
              </FormGroup> */}

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
                 
                  <FormGroup tag="fieldset">
                <label><Trans i18nKey="country"></Trans></label>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="country" />
                    <Trans i18nKey="country-options.china"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="status"/>{' '}
                    <Trans i18nKey="country-options.turkey"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="status"/>{' '}
                    <Trans i18nKey="country-options.america"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="status" />{' '}
                    <Trans i18nKey="country-options.other"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>

                <FormGroup tag="fieldset">
                <label><Trans i18nKey="status"></Trans></label>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="status" />
                    <Trans i18nKey="status-options.part-time"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="status"/>{' '}
                    <Trans i18nKey="status-options.full-time"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="status"/>{' '}
                    <Trans i18nKey="status-options.part-time-no-contract"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="status" />{' '}
                    <Trans i18nKey="status-options.unemployed"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>


              <FormGroup tag="fieldset">
                <label><Trans i18nKey="discipline"></Trans></label>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="status" />
                    <Trans i18nKey="discipline-options.natural-sciences"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="status"/>{' '}
                    <Trans i18nKey="discipline-options.social-sciences"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="status" />{' '}
                    <Trans i18nKey="discipline-options.arts-and-humanities"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="status" />{' '}
                    <Trans i18nKey="discipline-options.engineering"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup tag="fieldset">
                <label><Trans i18nKey="sensitivity"></Trans></label>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="sensitivity" />
                    <Trans i18nKey="sensitivity-options.not-very"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="sensitivity"/>{' '}
                    <Trans i18nKey="sensitivity-options.somewhat"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="sensitivity" />{' '}
                    <Trans i18nKey="sensitivity-options.more"></Trans>
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="sensitivity" />{' '}
                    <Trans i18nKey="sensitivity-options.extremely"></Trans>
                  </Label>
                </FormGroup>
              </FormGroup>

             
                
                
                <Button>Submit</Button>
            </Form>
            <br/><br/>

              <CardFooter>
                <FooterComponent/>
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
    return (
      <div className="App">
          <NavigationMenu />
          <InputForm />
          {}
        </div>
        )
      }
    }
    
    // ===========================================PAGES=============================================================
    
    // page uses the hook
function Page() {
  const {t, i18n} = useTranslation();
      
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
          <Router>
            <div>
              <Switch>
                <Route exact path="/">
                  <Page />
                </Route>
                <Route exact path="/form">
                  <InputForm />
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
      
