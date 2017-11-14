var React = require("react");
var reduxForm = require('redux-form').reduxForm;
var Field = require('redux-form').Field;

import Button from "muicss/lib/react/button";
import Modal, { closeStyle } from "simple-react-modal";

class ProfileForm extends React.Component {
    constructor() {
        super();

            }

    render() {
                //console.log("this.props.initialValue user : ", this.props.user.userName);
        return (
            <div>
        <br/>
        <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        <Field type="text" name="userName" className="inputcenterUserName" id="title" placeholder="User Name" component="input"/>
                        <br/>
                        <Field type="text" name="lastName" className="inputcenterLastName" id="title" placeholder="Last Name" component="input"/>
                        <br/>
                        <Field type="text" name="firstName" className="inputcenterFirstName" id="title" placeholder="First Name" component="input"/>
                        <br/>
                        <Field type="email" name="email" className="inputcenterEmail" id="title" placeholder="Email" component="input"/>
                        <br/>
                        <Field type="text" name="password" className="inputcenterEmail" id="title" placeholder="Password" component="input"/>
                        <br/>
                        <Button type="submit" value="Save" id="submitUser" >Save</Button>
                    </label>
                </form>
                </div>

            </div>
        )
    }
}

var ProfileXForm = reduxForm({
    form: 'profileForm',
    enableReinitialize: true
})(ProfileForm);

module.exports = ProfileXForm;
