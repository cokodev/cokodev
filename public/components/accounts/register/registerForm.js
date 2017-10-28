var React = require("react");
import { Fields, reduxForm } from "redux-form";
var Link = require('react-router-dom').Link
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";

//Declaration des champs du formulaire
const renderFields = (fields) => (
  <div>
    <div className="input-row">
      <label>Username</label><br/>
      <TextField {...fields.userName.input} type="text"/>
      {fields.userName.meta.touched && fields.userName.meta.error && 
       <span className="error">{fields.userName.meta.error}</span>}
    </div>
    
    <div className="input-row">
      <label>Last Name</label><br/>
      <TextField {...fields.lastName.input} type="text"/>
      {fields.lastName.meta.touched && fields.lastName.meta.error && 
       <span className="error">{fields.lastName.meta.error}</span>}
    </div>
        
    <div className="input-row">
      <label>First Name</label><br/>
      <TextField {...fields.firstName.input} type="text"/>
      {fields.firstName.meta.touched && fields.firstName.meta.error && 
       <span className="error">{fields.firstName.meta.error}</span>}
    </div>
    
    <div className="input-row">
      <label>Email</label><br/>
      <TextField {...fields.email.input} type="email"/>
      {fields.email.meta.touched && fields.email.meta.error && 
       <span className="error">{fields.email.meta.error}</span>}
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
    if (!values.userName) {
        errors.userName = "Required";
    }
    if (!values.lastName) {
        errors.lastName = "Required";
    }
    if (!values.firstName) {
        errors.firstName = "Required";
    }
    if (!values.email) {
        errors.email = "Required";
    }
    if (!values.password) {
        errors.password = "Required";
    }
    return errors;
}



class RegisterForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="login_register_page">
                <div id="content-wrapper" className="mui--text-center">
                   <div className="loginregister_title_bloc">
                        <h1>COKODEV</h1>
                        <h5> Collaborative code development</h5>
                    </div>    
                    <div className="loginregister_form_bloc">
                        <form onSubmit={this.props.handleSubmit}>
                            <Fields names={["userName", "lastName", "firstName", "email", "password"]} component={renderFields} />    
                            <Button raised color="primary" type="submit">Submit</Button>
                        </form>
                    </div>
                    <div className="loginregister_links_bloc">
                        <Link to="./">Login</Link>
                    </div>
                </div>
            </div>
        )
    }
}

var RegisterXForm = reduxForm({
    form: "RegisterForm",
    validate
})(RegisterForm);

module.exports = RegisterXForm;