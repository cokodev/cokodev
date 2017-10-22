var React = require('react');
var ReactDOM = require('react-dom');
var BrowserRouter = require('react-router-dom').BrowserRouter
var Route = require('react-router-dom').Route
var Link = require('react-router-dom').Link

//Les class
var App = require('./composants/app/app');
var Login = require('./composants/login/class/login');
var Register = require('./composants/register/class/register');

//RenderDom - La page de point entrée dans l'app
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
        </div>
    </BrowserRouter>, document.getElementById('container'));
