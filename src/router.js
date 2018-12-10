import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';
import Category from "./pagers/Category";
import Car from "./pagers/Car";
import User from "./pagers/User";
import Home from "./pagers/Home";


export default () => (
    <Router>
        <Switch>
            <Route path={'/home'} component={Home}/>
            <Route path={'/category'} component={Category}/>
            <Route path={'/car'} component={Car}/>
            <Route path={'/user'} component={User}/>
            <Route path={'/'} component={Home}/>
        </Switch>
    </Router>
)