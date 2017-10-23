var React = require("react");
var Link = require("react-router-dom").Link;

import Button from "muicss/lib/react/button";
import Input from "muicss/lib/react/input";

class Login extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h2>Cokodev</h2>
                <h4>Collaborative code development</h4>
                <form>
                    <Input hint="Username / Email" />
                    <Input hint="password" />
                    <Button color="primary">Login</Button>
                </form>
                <div>
                    <div><Link to="./register">Register</Link></div>
                    <div><Link to="./forgotpassword">Forgot password ?</Link></div>
                </div>
            </div>
        )
    }
}

module.exports = Login;
