var React = require("react");
var Link = require("react-router-dom").Link;

import Button from "muicss/lib/react/button";
import Input from "muicss/lib/react/input";

class Register extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
             <div>
                <h2>Cokodev</h2>
                <h4>Collaborative code development</h4>
                <form>
                    <Input hint="Username*" />
                    <Input hint="Last Name*" />
                    <Input hint="First Name*" />
                    <Input hint="Email*" />
                    <Input hint="Password*" />
                    <Input hint="Repeate pasword*" />
                    <Button color="primary">Register</Button>
                </form>
                <div>
                    <Link to="./login">Login</Link>
                </div>
            </div>
        )
    }
}

module.exports = Register;
