var React = require("react");
import { Fields, reduxForm } from "redux-form";
var Link = require('react-router-dom').Link;
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";

//Declaration des champs du formulaire
const renderFields = (fields) => (
  <div>
    <div className="input-row">
      <label>Username / Email</label><br/>
      <TextField {...fields.login.input} type="text"/>
      {fields.login.meta.touched && fields.login.meta.error && 
       <span className="error">{fields.login.meta.error}</span>}
    </div>
    <div className="input-row">
      <label>Password</label><br/>
      <TextField {...fields.password.input} type="password"/>
      {fields.password.meta.touched && fields.password.meta.error && 
       <span className="error">{fields.password.meta.error}</span>}
    </div>
  </div>
)

//Validation du formulaire de login
const validate = values => {
  const errors = {};
    if (!values.login) {
      errors.login = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
}


class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  show() {
    this.setState({ show: true });
  }

  close() {
    this.setState({ show: false });
  }

  render() {
    return <div className="login_register_page">
        <div id="content-wrapper" className="mui--text-center">
          <div className="loginregister_title_bloc">
            <h1>COKODEV</h1>
            <h5> Collaborative code development</h5>
          </div>
          <div className="loginregister_form_bloc">
            <form onSubmit={this.props.handleSubmit}>
              <Fields names={["login", "password"]} component={renderFields} />
              <Button raised color="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
          <div className="loginregister_links_bloc">
            <Link to="./register">Register</Link>
            <Link to="./forgotpassword">Forgot Password ?</Link>
          </div>
        </div>
      </div>;
  }
}
//-----Conteneur
var LoginXForm = reduxForm({
  form: "LoginForm",
  validate
})(LoginForm);

module.exports = LoginXForm;
