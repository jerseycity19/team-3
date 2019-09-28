import React, { Component } from 'react';
import NavigationMenu from './header_footer/header';
import './App.css';
import {Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Button} from 'reactstrap';
import FooterComponent from './header_footer/footer';
import Age from "./Age.png";
import Gender from "./Gender.png";
import Language from "./Language.png";
import UserID from "./UserID.png";
import { Agent } from 'http';

class Data extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
                <NavigationMenu/>
                    <div className="age_graph">
                        <img src={Age} />
                    </div>
                    <br/>
                    <div className="gender_graph">
                        <img src={Gender} />
                    </div>
                    <br/>
                    <div className="language_graph">
                        <img src={Language} />
                    </div>
                    <br/>
                    <div className="user_graph">
                        <img src={UserID} />
                    </div>
                    <br/>
                    {/* <div className="age_graph">
                        <img src={} />
                    </div> */}
                <CardFooter>
                    <FooterComponent/>
                </CardFooter>
            </div>
        );
    }
}

export default Data;