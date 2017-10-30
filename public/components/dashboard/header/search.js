var React = require("react");

class Search extends React.Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div>
        <form>
            <i className="fa fa-search" aria-hidden="true" />
            <input
            type="text"
            name="search"
            placeholder="Search for snippets..."
            />
        </form>
      </div>
    );
  }
}

module.exports = Search;
