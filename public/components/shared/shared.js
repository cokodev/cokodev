var React = require("react");
var HeaderX = require("../dashboard/header/header");
var ListsnippetsharedX = require("./listsnippetshared");
var ListfoldersharedX = require("./listfoldershared");
var ContentSnippetSharedX = require("./contentshared");

var Link = require("react-router-dom").Link;

class Shared extends React.Component {
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
                                <a href="/dashboard"><button className="mui-btn mui-btn--primary" id="goDashboard">Dashboard</button></a>
                                <Link to="/shared"><button className="mui-btn mui-btn--primary" id="goShared">Shared</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="app">
                    <div className="mui-container-fluid">
                        <div className="mui-row">
                            <div className="mui-col-md-3" id="folder">
                                <ListfoldersharedX/>
                            </div>
                            <div className="mui-col-md-3" id="snippet">
                                <ListsnippetsharedX/>
                            </div>
                            <div className="mui-col-md-6" id="content">
                                <ContentSnippetSharedX/>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="mui-container mui--text-center">
                        <p>
                            Developers <a href="#">Gaspard Lehembreg</a>,
                            <a href="#">Guillaume Suiffet</a>, <a href="#">Olivia Otastet</a>
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}

module.exports = Shared;