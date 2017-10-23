var React = require("react");
var Link = require("react-router-dom").Link;
class Forgotpassword extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h3>Forgot Password</h3>
                 <Link to="./login">Login</Link>
            </div>
        )
    }
}

module.exports = Forgotpassword;