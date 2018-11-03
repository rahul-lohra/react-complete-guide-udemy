import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import SignIn from "./signIn/SignIn";
import {SignInNew,HeaderNew} from "./signIn/sample";



ReactDOM.render(<App />, document.getElementById('root'));

// var item = React.crea()
// ReactDOM.render()
registerServiceWorker();
