var React = require("react");
var LoginXForm = require("./loginForm");
var { Route, Redirect } = require("react-router");
import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory();
var connect = require("react-redux").connect;

class Login extends React.Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.state = { islog: false };
  }


  submit(values) {
    //var componentSignupStore = this;
    var componentSignup = this;
    //Ajax Jquery

    $.ajax({
      type: "POST",
      url: "/login",
      // The key needs to match your method's input parameter (case-sensitive).
      data: values,
      success: function (data) {
         console.log(data);
        if (data.error != true) {
          componentSignup.setState({ islog: true });
          componentSignup.props.getUserData(data);
        }
      }
    });
  }

  render() {
    var redirectComponent;
    if (this.state.islog) {
      redirectComponent = <Redirect to="/dashboard" />;
    }

    return (
      <div>
        {redirectComponent}
        <LoginXForm onSubmit={this.submit} />
      </div>
    );
  }
}


function mapDispatchToPropsUsersdata(dispatch) {
  return {
    getUserData: function(userdata) {
      dispatch({ type: "login",userdata});
    }
  };
}

var LoginX = connect(null, mapDispatchToPropsUsersdata)(Login);

module.exports = LoginX;
