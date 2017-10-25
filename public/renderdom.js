var React = require('react');
var ReactDOM = require('react-dom');
var BrowserRouter = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;

//Initialisation de Redux pour le Store
var createStore = require("redux").createStore;
var Provider = require("react-redux").Provider;

//Les class
var App = require("./components/app/app");
var Login = require('./components/login/class/login');
var Register = require('./components/register/class/register');
var Forgotpassword = require('./components/forgotpassword/class/forgotpassword');
var Dashboard = require("./components/dashboard/dashboard");
var Test = require("./components/test/test");

//Reducer global
var globalReducers =  require('./components/app/combineReducerReduc');

//Création du Store
const store = createStore(globalReducers, ({folder:[]}));

//RenderDom - La page de point entrée dans l'app
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgotpassword" component={Forgotpassword} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/test" component={Test} />
        </div>
      </BrowserRouter>
    </Provider>,
  document.getElementById("container")
);

