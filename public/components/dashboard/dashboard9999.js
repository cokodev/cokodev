var React = require("react");
var HeaderX = require("./header/header");
var FolderX = require("./folder/headerfolder");
var ListFolderX = require("./folder/listfolder");

class Dashboard9999 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {/* Header */}
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
              </div>
              </div>
              </div>
      </div>

    );
  }
}

module.exports = Dashboard9999;
