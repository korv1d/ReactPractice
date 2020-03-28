import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About";
import Contact from "./Contact.js";
import Products from "./Products.js";
import Home from "./Home.js";
import history from '../history.js';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} />
                </Switch>
            </Router>
        )
    }
}