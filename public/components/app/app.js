var React = require("react");
var Login = require("../login/class/login");
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
        <div>
            <Login/>
        </div>
    );
  }
}

module.exports = App;

