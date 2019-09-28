import React, { Component } from 'react';
import NavigationMenu from './header_footer/header';
import './App.css';
import {
    Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';
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
                        <NavigationMenu />
                        <br />
                        <form>
                            <label>
                                Username:
                        <input type="text" name="name" /><br />
                            </label><br />
                            <label>
                                Password:
                    		<input type="password" name="name" /><br />
                            </label><br />
                            </form>
                            <a href="/data"><button> Login </button></a>
                    </div>
                </CardBody>
                <CardFooter><FooterComponent className="footer" /></CardFooter>
            </Card>
        );
    }

}

export default Login;
