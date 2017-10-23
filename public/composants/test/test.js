var React = require("react");
import Button from "muicss/lib/react/button";
import Input from "muicss/lib/react/input";

class Test extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h3>Welcome to cokodev</h3>
        <div>
          <p>Exemple add mui formulaire</p>
          <Input hint="login" />
          <Input hint="password" />
          <Button color="primary">Save</Button>
        </div>
        <div>
          <p>Exemple font ansome</p>
          <i className="fa fa-code" aria-hidden="true" />
          <i className="fa fa-heart" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

module.exports = Test;
