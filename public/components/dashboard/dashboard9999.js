var React = require("react");
var HeaderX = require("./header/header");
var FolderX = require("./folder/headerfolder");
var ListFolderX = require("./folder/listfolder");
var SnippetX = require("./snippet/headersnippet");
var ListSnippetX = require("./snippet/listsnippet");
var ContentSnippetX = require("./contentsnippet/contentsnippet");

class Dashboard9999 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <HeaderX />
        <div id="button-bar">
          <div id="content-wrapper" className="mui--text-center">
            <div className="mui--appbar-height" />
            <div className="mui--text-display3">
              <div className="tabBar">
                <button className="mui-btn mui-btn--primary">Dashboard</button>
                <button className="mui-btn mui-btn--primary">Shared</button>
              </div>
            </div>
          </div>
        </div>
        <div id="app">
          <div className="mui-container-fluid">
            <div className="mui-row">
              <div className="mui-col-md-3" id="folder">
                <FolderX/>
                <ListFolderX/>
              </div>
              <div className="mui-col-md-3" id="snippet">
                  <SnippetX/>
                  <ListSnippetX/>
              </div>
              <div className="mui-col-md-6" id="content">
                <ContentSnippetX/>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="mui-container mui--text-center">
            <p>
              Developers <a href="#">Gaspard Lehembre</a>,{" "}
              <a href="#">Guillaume Suiffet</a>, <a href="#">Olivia Otastet</a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

module.exports = Dashboard9999;
