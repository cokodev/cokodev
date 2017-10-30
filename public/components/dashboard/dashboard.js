var React = require("react");
var HeaderX = require("./header/header");
var FolderX = require("./folder/headerfolder");
var ListFolderX = require("./folder/listfolder");
var Headersnippet = require("./snippet/headersnippet");


class Dashboard extends React.Component {
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



                  <Headersnippet/>



                <div id="sn-snippet" className="mui-row">
                  <div>
                    <a href="#" onClick={this.activateModalSnippet}>
                      <img
                        src="img/snippet.png"
                        alt="image snippet"
                        className="image"
                      />
                    </a>
                  </div>
                  <h5>Name snippet</h5>
                  <p>Description</p>
                  <p>
                    <span id="snippettag">#tag</span>
                    <span id="folderonsnippet">name folder</span>
                  </p>
                </div>
                <div id="sn-snippet" className="mui-row">
                  <div>
                    <a href="#" onClick={this.activateModalSnippet}>
                      <img
                        src="img/snippet.png"
                        alt="image snippet"
                        className="image"
                      />
                    </a>
                  </div>
                  <h5>Name snippet</h5>
                  <p>Description</p>
                  <p>
                    <span id="snippettag">#tag</span>
                    <span id="folderonsnippet">name folder</span>
                  </p>
                </div>
                <div id="sn-snippet" className="mui-row">
                  <div>
                    <a href="#" onClick={this.activateModalSnippet}>
                      <img
                        src="img/snippet.png"
                        alt="image snippet"
                        className="image"
                      />
                    </a>
                  </div>
                  <h5>Name snippet</h5>
                  <p>Description</p>
                  <p>
                    <span id="snippettag">#tag</span>
                    <span id="folderonsnippet">name folder</span>
                  </p>
                </div>
                <div id="sn-snippet" className="mui-row">
                  <div>
                    <a href="#" onClick={this.activateModalSnippet}>
                      <img
                        src="img/snippet.png"
                        alt="image snippet"
                        className="image"
                      />
                    </a>
                  </div>
                  <h5>Name snippet</h5>
                  <p>Description</p>
                  <p>
                    <span id="snippettag">#tag</span>
                    <span id="folderonsnippet">name folder</span>
                  </p>
                </div>
                <div id="sn-snippet" className="mui-row">
                  <div>
                    <a href="#" onClick={this.activateModalSnippet}>
                      <img
                        src="img/snippet.png"
                        alt="image snippet"
                        className="image"
                      />
                    </a>
                  </div>
                  <h5>Name snippet</h5>
                  <p>Description</p>
                  <p>
                    <span id="snippettag">#tag</span>
                    <span id="folderonsnippet">name folder</span>
                  </p>
                </div>
                <div id="sn-snippet" className="mui-row">
                  <div>
                    <a href="#" onClick={this.activateModalSnippet}>
                      <img
                        src="img/snippet.png"
                        alt="image snippet"
                        className="image"
                      />
                    </a>
                  </div>
                  <h5>Name snippet</h5>
                  <p>Description</p>
                  <p>
                    <span id="snippettag">#tag</span>
                    <span id="folderonsnippet">name folder</span>
                  </p>
                </div>
                <div id="sn-snippet" className="mui-row">
                  <div>
                    <a href="#" onClick={this.activateModalSnippet}>
                      <img
                        src="img/snippet.png"
                        alt="image snippet"
                        className="image"
                      />
                    </a>
                  </div>
                  <h5>Name snippet</h5>
                  <p>Description</p>
                  <p>
                    <span id="snippettag">#tag</span>
                    <span id="folderonsnippet">name folder</span>
                  </p>
                </div>
                <div id="sn-snippet" className="mui-row">
                  <div>
                    <a href="#" onClick={this.activateModalSnippet}>
                      <img
                        src="img/snippet.png"
                        alt="image snippet"
                        className="image"
                      />
                    </a>
                  </div>
                  <h5>Name snippet</h5>
                  <p>Description</p>
                  <p>
                    <span id="snippettag">#tag</span>
                    <span id="folderonsnippet">name folder</span>
                  </p>
                </div>
                <div id="sn-snippet" className="mui-row">
                  <div>
                    <a href="#" onClick={this.activateModalSnippet}>
                      <img
                        src="img/snippet.png"
                        alt="image snippet"
                        className="image"
                      />
                    </a>
                  </div>
                  <h5>Name snippet</h5>
                  <p>Description</p>
                  <p>
                    <span id="snippettag">#tag</span>
                    <span id="folderonsnippet">name folder</span>
                  </p>
                </div>
                <div id="sn-snippet" className="mui-row">
                  <div>
                    <a href="#" onClick={this.activateModalSnippet}>
                      <img
                        src="img/snippet.png"
                        alt="image snippet"
                        className="image"
                      />
                    </a>
                  </div>
                  <h5>Name snippet</h5>
                  <p>Description</p>
                  <p>
                    <span id="snippettag">#tag</span>
                    <span id="folderonsnippet">name folder</span>
                  </p>
                </div>
              </div>
              <div className="mui-col-md-6" id="content">
                <div className="easy2">
                  <div className="mui--text-center mui--align-bottom">
                    <span id="p2Back">
                      <a href="#">
                        <i className="fa fa-ellipsis-h" aria-hidden="true" />
                      </a>
                    </span>
                  </div>
                  <p>Message</p>
                </div>
                <div className="easy1">
                  <div className="mui--text-center mui--align-bottom">
                    <span id="p1Next">
                      <a href="#">
                        <i className="fa fa-ellipsis-h" aria-hidden="true" />
                      </a>
                    </span>
                  </div>
                  <p>Content</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="mui-container mui--text-center">
            <p>
              Developers <a href="#">Gaspard Lehembreg</a>,{" "}
              <a href="#">Guillaume Suiffet</a>, <a href="#">Olivia Otastet</a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

module.exports = Dashboard;
