import React, { Component } from 'react';
import NavigationMenu from './header_footer/header';
import './App.css';
import {Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Button} from 'reactstrap';
import FooterComponent from './header_footer/footer';

class Data extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
                <NavigationMenu/>
                <p>INSERT DATA STUFF HERE</p>
                <CardFooter>
                    <FooterComponent/>
                </CardFooter>
            </div>
        );
    }
}

export default Data;