import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from './WelcomeComponent';
import Home from './HomeComponent';
import "../App.css"


const Main = () => (
<BrowserRouter >
    <Switch>
    <Route exact path="/" component={Welcome}/>
    <Route path="/home" component={Home}/>
   </Switch>
</BrowserRouter>
);
export default Main;