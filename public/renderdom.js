var React = require("react");
var ReactDOM = require("react-dom");
var BrowserRouter = require("react-router-dom").BrowserRouter;
var Route = require("react-router-dom").Route;

//Initialisation de Redux pour le Store
var createStore = require("redux").createStore;
var Provider = require("react-redux").Provider;

//Les class
var App = require("./components/app/app");
var LoginX = require("./components/accounts/login/login");
var Register = require("./components/accounts/register/register");
var Forgotpassword = require("./components/accounts/forgotpassword/forgotpassword");
var Dashboard = require("./components/dashboard/dashboard");
var Dashboard9999 = require("./components/dashboard/dashboard9999");

//Reducer global
var globalReducers = require("./components/app/combineReducer");

const store = createStore(globalReducers, ({
  form: {},
  folder: [{ folderName: "titleExample", folderDescription: "descriptionExample" }],
  usersdata: usercurrentdata
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


//RenderDom - La page de point entrée dans app
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={LoginX} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgotpassword" component={Forgotpassword} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard9999" component={Dashboard9999} />
        <Route exact path="/lougout" />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("container")
);
