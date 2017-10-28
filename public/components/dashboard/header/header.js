var React = require("react");
var Link = require('react-router-dom').Link
var connect = require("react-redux").connect;

class Header extends React.Component {
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
                  <td className="mui--text-title">
                    <Link to="./dashboard9999">CoKoDEV</Link>
                  </td>
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
                          src="img-user.jpg"
                          alt="image profil"
                        />
                        <div className="mui-dropdown">
                          <button
                            className="mui-btn mui-btn--primary"
                            data-mui-toggle="dropdown"
                          >
                            {this.props.lastname} {this.props.firstname}
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
                              <a href="./logout">Logout</a>
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
      </div>
    );
  }
}


function mapStateToPropsHeader(state) {
  console.log("affichage username", state.usersdata.userName);
  return { lastname: state.usersdata.lastName , firstname: state.usersdata.firstName };
}
var HeaderX = connect(mapStateToPropsHeader, null)(Header);

module.exports = HeaderX;
