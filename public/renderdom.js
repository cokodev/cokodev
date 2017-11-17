var React = require("react");
var ReactDOM = require("react-dom");
var BrowserRouter = require("react-router-dom").BrowserRouter;
var Route = require("react-router-dom").Route;

var store = require("./components/app/store");
var SelectFolder = require("./components/app/AutoSearch");

//Initialisation de Redux pour le Store
var Provider = require("react-redux").Provider;

window.SelectFolder = SelectFolder;

//Les class
var App = require("./components/app/app");
var LoginX = require("./components/accounts/login/login");
var Register = require("./components/accounts/register/register");
var Forgotpassword = require("./components/accounts/forgotpassword/forgotpassword");
var SharedX = require("./components/shared/shared");
var Profile = require("./components/dashboard/profile/profile");
var Dashboard = require("./components/dashboard/dashboard");
var Dashboard9999 = require("./components/dashboard/dashboard9999");


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
          <Route exact path="/shared" component={SharedX} />
          <Route exact path="/profile" component={Profile} />
        <Route exact path="/dashboard9999" component={Dashboard9999} />
        <Route exact path="/logout" />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("container")
);
