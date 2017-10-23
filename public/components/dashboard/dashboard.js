var React = require("react");

class Dashboard extends React.Component {
  constructor() {
    super();
  }
  activateModalFolder() {
    console.log();
    // modal folder
    var $modalEl = $("<div/>");
    // set style
    $modalEl.css({
      width: 400,
      height: 300,
      margin: "100px auto",
      backgroundColor: "#263043"
    });
    // content modal folder
    var $titleE1 = $('<h4 class="titleE1">Untitle folder</h4>');
    var $formEl = $(
      '<form class="formEl">' +
        '<Input type="text" class="inputcenterTitleFolder" id="title" placeholder="Untitle folder">' +
        "<br>" +
        '<Input type="text" class="inputcenterDesc" placeholder="Description">' +
        "<br>" +
        '<Button type="submit" value="Save" id="submit">Save</Button>' +
        "</form>"
    );
    $modalEl.append($titleE1);
    $modalEl.append($formEl);
    // show modal
    mui.overlay("on", $modalEl.get(0));
  }
  activateModalSnippet() {
    // modal snippet
    var $modalE2 = $("<div/>");
    // set style
    $modalE2.css({
      width: 400,
      height: 300,
      margin: "100px auto",
      backgroundColor: "#263043"
    });
    // content modal snippet
    var $titleE2 = $('<h4 class="titleE2">Untitle snippet (name folder)</h4>');
    var $formE2 = $(
      '<form class="mui--text-center formE2">' +
        '<Input type="text" class="inputcenterTitleSnippet" placeholder="Untitle snippet">' +
        "<br>" +
        '<Input type="text" class="inputcenterDesc" placeholder="Description">' +
        "<br>" +
        '<Input type="text" class="inputcenterTag" placeholder="Tag">' +
        "<br>" +
        '<select id="select" class="inputcenterTypeL">' +
        '<option value="valeur1">Plain text</option>' +
        '<option value="valeur2" selected>JS</option>' +
        '<option value="valeur3">CSS</option>' +
        "</select>" +
        "<br>" +
        '<Button type="submit" value="Save" id="submit">Save</Button>' +
        "</form>"
    );
    $modalE2.append($titleE2);
    $modalE2.append($formE2);
    // show modal
    mui.overlay("on", $modalE2.get(0));
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
                          src="images/img-user.jpg"
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
              <div>
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
                <div id="header" className="mui-row">
                  <button
                    className="mui-btn mui-btn--small"
                    onClick={this.activateModalFolder}
                  >
                    <strong>+</strong>
                  </button>
                  <a href="#">
                    <i className="fa fa-trash-o" aria-hidden="true" />
                  </a>
                </div>
                <div id="fo-folder" className="mui-row">
                  <div>
                    <a href="#" onClick={this.activateModalFolder}>
                      <img
                        src="images/folder.png"
                        alt="image folder"
                        className="image"
                      />
                    </a>
                  </div>
                  <h5>Default</h5>
                  <p>folder for snippet</p>
                </div>
                <div id="fo-folder" className="mui-row">
                  <div>
                    <a href="#" onClick={this.activateModalFolder}>
                      <img
                        src="images/folder.png"
                        alt="image folder"
                        className="image"
                      />
                    </a>
                  </div>
                  <h5>Default</h5>
                  <p>folder for snippet</p>
                </div>
                <div id="fo-folder" className="mui-row">
                  <div>
                    <a href="#" onClick={this.activateModalFolder}>
                      <img
                        src="images/folder.png"
                        alt="image folder"
                        className="image"
                      />
                    </a>
                  </div>
                  <h5>Default</h5>
                  <p>folder for snippet</p>
                </div>
              </div>
              <div className="mui-col-md-3" id="snippet">
                <div id="header" className="mui-row">
                  <button
                    className="mui-btn mui-btn--small"
                    onClick={this.activateModalSnippet}
                  >
                    <strong>+</strong>
                  </button>
                  <a href="#">
                    <i className="fa fa-trash-o" aria-hidden="true" />
                  </a>
                </div>
                <div id="sn-snippet" className="mui-row">
                  <div>
                    <a href="#" onClick={this.activateModalSnippet}>
                      <img
                        src="images/snippet.png"
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
                        src="images/snippet.png"
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
                        src="images/snippet.png"
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
                        src="images/snippet.png"
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
                        src="images/snippet.png"
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
                        src="images/snippet.png"
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
                        src="images/snippet.png"
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
                        src="images/snippet.png"
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
                        src="images/snippet.png"
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
                        src="images/snippet.png"
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
