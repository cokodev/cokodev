var React = require("react");

var Folder = require("./searchfolder");
// First, we need to add the Hits component to our import
import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
  RefinementList,
  CurrentRefinements,
  ClearAll
} from "react-instantsearch/dom";


function Search() {
  return <div className="container">
      <CurrentRefinements />
      <SearchBox translations={{placeholder:"Search folder and snippet"}}/>
      <RefinementList attributeName="category" />
      <Hits hitComponent={Folder} />
    </div>;
}

module.exports = Search;
