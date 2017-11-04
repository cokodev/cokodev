var React = require("react");
var HeaderX = require("../dashboard/header/header");
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
                                <Link to="/dashboard"><button className="mui-btn mui-btn--primary" id="goDashboard">Dashboard</button></Link>
                                <Link to="/shared"><button className="mui-btn mui-btn--primary" id="goShared">Shared</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="app">
                    <div className="mui-container-fluid">
                        <div className="mui-row">
                            <div className="mui-col-md-3" id="folder">
                                <div id="header" className="mui-row">
                                    <button className="mui-btn mui-btn--small" onClick={this.activateModalFolder}><strong>+</strong></button>
                                    <a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                                </div>


                                <div id="fo-folder" className="mui-row">
                                    <div>
                                        <a href="#" onClick={this.activateModalFolder}><img src="images/folder.png" alt="image folder" className="image"/></a>
                                    </div>
                                    <h5>Default</h5>
                                    <p>folder for snippet</p>
                                </div>


                            </div>
                            <div className="mui-col-md-3" id="snippet">
                                <div id="header" className="mui-row">
                                    <button className="mui-btn mui-btn--small" onClick={this.activateModalSnippet}><strong>+</strong></button>
                                    <a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                                </div>


                                <div id="sn-snippet" className="mui-row">
                                    <div>
                                        <a href="#" onClick={this.activateModalSnippet} ><img src="images/snippet.png" alt="image snippet" className="image"/></a>
                                    </div>
                                    <h5>Name snippet</h5>
                                    <p>Description</p>
                                    <p><span id="snippettag">#tag</span><span id="folderonsnippet">name folder</span></p>
                                </div>


                            </div>
                            <div className="mui-col-md-6" id="content">
                                <p>Content</p>
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