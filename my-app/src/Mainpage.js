//import React, { Component } from 'react';
import React, { Component } from 'react';
import NavigationMenu from './header_footer/header';
import './App.css';
import {Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Button} from 'reactstrap';
import FooterComponent from './header_footer/footer';
class Mainpage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
                <NavigationMenu/>
                <div className="homepage_text">
                    <br/><br/><br/>
                    <p className="text">Many scholars around the world face the serious issue of self-censorship, in which they’re unable to freely express thoughts and ideas for fear of persecution. We’re asking for your help in combating this extremely detrimental effect by simply filling out our survey. You’ll remain completely anonymous, and this data will help us fight against self-censorship worldwide.</p>
                    <br/><br/>
                    <button href="/form">I understand and agree</button></div>
                    <br/><br/><br/><br/>
                <CardFooter><FooterComponent/></CardFooter>
            </div>
        );
    }

}

export default Mainpage;
