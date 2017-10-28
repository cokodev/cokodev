var React = require('react');
var RegisterXForm = require("./registerForm");
var {Route, Redirect} = require('react-router');

class Register extends React.Component {
    constructor() {
        super();
            this.submit = this.submit.bind(this);
                this.state = {islog: false};
    }
    submit(values){ // pouvait être plus facilement fait avec Fetch
             var componentSignup =  this;
        $.ajax({
            type: 'POST',
            url: "./register",
            data: values,
            success: function (data) {
                if (data == "registred") {
                     componentSignup.setState({islog: true});
                }
                console.log("register",data);
            },
            error: function (error) {
                //alert('Error connecting to the server.');
                $(err).html("Error connecting to the server.");
            }
        });
    }
    render() {
        var redirectComponent;
        if (this.state.islog) {
            redirectComponent = <Redirect  to="/login"/>
        }
        return <div>
            {redirectComponent}
            <div id="err" color="" />
            <RegisterXForm onSubmit={this.submit} />
          </div>;
    }
}

module.exports = Register;