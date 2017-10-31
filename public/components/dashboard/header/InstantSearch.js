var React = require("react");
import { InstantSearch } from "react-instantsearch/dom";
var Search = require("./Search");


class InstantSearchC extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <InstantSearch
          apiKey="f984b048d36fb379766c4691b0583863"
          appId="R4HR5R8AAA"
          indexName="search_cokodev"
        >
          <Search/>
        </InstantSearch>
      </div>
    );
  }
}

module.exports = InstantSearchC;
