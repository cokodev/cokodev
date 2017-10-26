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
var Login = require('./components/login/login');
var Register = require('./components/register/register');
var Forgotpassword = require('./components/forgotpassword/forgotpassword');
var Dashboard = require("./components/dashboard/dashboard");

//Reducer global
var globalReducers =  require('./components/app/combineReducer');

//Création du Store
const store = createStore(globalReducers, ({folder:[]}));
console.log("store",store.getState());

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
        </div>
      </BrowserRouter>
    </Provider>,
  document.getElementById("container")
);

