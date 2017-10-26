var React = require("react");
var LoginXForm = require("./loginForm");
var { Route, Redirect } = require("react-router");

class Login extends React.Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.state = { islog: false };
  }
  submit(values) {
    var componentSignup = this;
    //Ajax Jquery
    $.ajax({
      type: "POST",
      url: "/login",
      // The key needs to match your method's input parameter (case-sensitive).
      data: values,
      success: function(data) {
        if (data == "logged") {
          componentSignup.setState({ islog: true });
        }
      },
      failure: function(errMsg) {
        console.log("not Ok" + errMsg);
        $(err).html(data.error);
        $("#err").html("<p> erreur d'enregistrement</p>");
      }
    });

    console.log(values);
  }
  render() {
    var redirectComponent;
    if (this.state.islog) {
      redirectComponent = <Redirect to="/dashboard" />;
    }
    return (
      <div>
        {redirectComponent}
        <div id="err" color="" />
        <LoginXForm onSubmit={this.submit} />
      </div>
    );
  }
}

module.exports = Login;
