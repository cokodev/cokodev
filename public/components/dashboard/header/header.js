var React = require("react");
var Link = require('react-router-dom').Link
var connect = require("react-redux").connect;
class Header extends React.Component {
  constructor() {
    super();

  }
  render() {
    return <div>
        <header className="mui-appbar mui--z1">
          <div className="mui-container">
            <table width="100%">
              <tbody className="mui--appbar-height">
                <tr>
                  <td className="mui--text-title">
                    <Link to="./dashboard9999">CoKoDEV</Link>
                  </td>
                  <td className="mui--text-body2">
                    <div className="aa-input-container" id="aa-input-container">
                      <input type="search" id="aa-search-input" className="aa-input-search" 
                      placeholder="Search folders and sinppets..." name="search" autoComplete="on" />
                      <svg className="aa-input-icon" viewBox="654 -372 1664 1664">
                        <path d="M1806,332c0-123.3-43.8-228.8-131.5-316.5C1586.8-72.2,1481.3-116,1358-116s-228.8,43.8-316.5,131.5  C953.8,103.2,910,208.7,910,332s43.8,228.8,131.5,316.5C1129.2,736.2,1234.7,780,1358,780s228.8-43.8,316.5-131.5  C1762.2,560.8,1806,455.3,1806,332z M2318,1164c0,34.7-12.7,64.7-38,90s-55.3,38-90,38c-36,0-66-12.7-90-38l-343-342  c-119.3,82.7-252.3,124-399,124c-95.3,0-186.5-18.5-273.5-55.5s-162-87-225-150s-113-138-150-225S654,427.3,654,332  s18.5-186.5,55.5-273.5s87-162,150-225s138-113,225-150S1262.7-372,1358-372s186.5,18.5,273.5,55.5s162,87,225,150s113,138,150,225  S2062,236.7,2062,332c0,146.7-41.3,279.7-124,399l343,343C2305.7,1098.7,2318,1128.7,2318,1164z" />
                      </svg>
                    </div>
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
                        <img className="img-user" src="img-user.jpg" alt="image profil" />
                        <div className="mui-dropdown">
                          <button className="mui-btn mui-btn--primary" data-mui-toggle="dropdown">
                            {this.props.firstname} {this.props.lastname}
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
      </div>;
  }
}


function mapStateToPropsHeader(state) {
  console.log("affichage username", state.usersdata.userName);
  return { lastname: state.usersdata.lastName , firstname: state.usersdata.firstName };
}
var HeaderX = connect(mapStateToPropsHeader, null)(Header);

module.exports = HeaderX;