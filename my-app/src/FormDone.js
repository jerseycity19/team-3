import React, { Component } from 'react';
import NavigationMenu from './header_footer/header';
import './App.css';

class FormDone extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <NavigationMenu/>
                <p>Thank you for filling out the form!</p>
            </div>
        );
    }

}

export default FormDone;