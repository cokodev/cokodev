var React = require("react");
var FolderX = require("./folder/headerfolder");
var ListFolderX = require("./folder/listfolder");
var SnippetX = require("./snippet/headersnippet");
var ListSnippetX = require("./snippet/listsnippet");


class Dashboard extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <header className="mui-appbar mui--z1">
          <div className="mui-container">
            <table width="100%">
              <tbody className="mui--appbar-height">
                <tr>
                  <td className="mui--text-title">CoKoDEV</td>
                  <td className="mui--text-body2">
                    <form>
                      <i className="fa fa-search" aria-hidden="true" />
                      <input
                        type="text"
                        name="search"
                        placeholder="Search for snippets..."
                      />
                    </form>
                  </td>
                  <td align="right">
                    <ul className="mui-list--inline mui--text-body2">
                      <li>
                        <a href="#">
                          <i className="fa fa-bell-o" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-comment-o" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <img
                          className="img-user"
                          src="img/img-user.jpg"
                          alt="image profil"
                        />
                        <div className="mui-dropdown">
                          <button
                            className="mui-btn mui-btn--primary"
                            data-mui-toggle="dropdown"
                          >
                            UserName
                            <span className="mui-caret" />
                          </button>
                          <ul className="mui-dropdown__menu mui-dropdown__menu--right">
                            <li>
                              <a href="#">Account</a>
                            </li>
                            <li>
                              <a href="#">Tutorial</a>
                            </li>
                            <li>
                              <a href="#">Logout</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </header>
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
