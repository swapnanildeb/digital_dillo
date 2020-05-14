import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';


const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />

            </Switch>   </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
