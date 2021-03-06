var React = require("react");
var HeaderX = require("./header/header");
var DashboardBodyX = require("./dashboardbody");
var Link = require("react-router-dom").Link;

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
                  <Link to="/dashboard"><button className="mui-btn mui-btn--primary" id="goDashboard">Dashboard</button></Link>
                  <Link to="/shared"><button className="mui-btn mui-btn--primary" id="goShared">Shared</button></Link>
              </div>
            </div>
          </div>
        </div>
        <DashboardBodyX/>
        <footer>
          <div className="mui-container mui--text-center">
            <p>
              Developers <a href="#">Gaspard Lehembre</a>, <a href="#">Guillaume Suiffet</a>, <a href="#">Olivia Tastet</a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

module.exports = Dashboard;
