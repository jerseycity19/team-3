import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import i18n (needs to be bundled ;))
import './i18n';

ReactDOM.render(<App />, document.getElementById('root'));
