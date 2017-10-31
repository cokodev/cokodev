var React = require("react");
import {InstantSearch, Hits, SearchBox, Highlight} from 'react-instantsearch/dom';

function Folder({ hit }) {
  return (
   <div style={{marginTop: '10px'}}>
      <span className="hit-name">
        <Highlight attributeName="image" hit={hit} />
        <Highlight attributeName="name" hit={hit} />
        <Highlight attributeName="description" hit={hit} />
      </span>
    </div>
  );
}

module.exports = Folder;