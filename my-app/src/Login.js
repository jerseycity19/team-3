import React, { Component } from 'react';
import NavigationMenu from './header_footer/header';
import './App.css';
import {Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText,Button} from 'reactstrap';
import FooterComponent from './header_footer/footer';
class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <Card>
            <CardBody>
                <div className="App">
                    <NavigationMenu/>
                    <br/>
                <form className="login_form">
                    <label>
                        Username:
                        <input type="text" name="name" /><br/>
                    </label><br/>
                    <label>
                        Password:
                    <input type="password" name="name" /><br/>
                    </label><br/    >
                    <Button color="success">Submit</Button>    
                </form>
                </div>
            </CardBody>
            <CardFooter><FooterComponent className="footer"/></CardFooter>
        </Card>
        );
    }

}

export default Login;