var React = require('react');
var ReactDOM = require('react-dom');
var BrowserRouter = require('react-router-dom').BrowserRouter
var Route = require('react-router-dom').Route
var Link = require('react-router-dom').Link

//Les class
var App = require("./components/app/app");
var Login = require('./components/login/class/login');
var Register = require('./components/register/class/register');
var Forgotpassword = require('./components/forgotpassword/class/forgotpassword');
var Dashboard = require("./components/dashboard/dashboard");
var Test = require("./components/test/test");


//RenderDom - La page de point entrée dans l'app
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/forgotpassword" component={Forgotpassword} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/test" component={Test} />
    </div>
  </BrowserRouter>,
  document.getElementById("container")
);

