var React = require("react");
var connect = require('react-redux').connect;
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
        var initialValue = {snippetLike : this.props.snippetContent.snippetLike};
        console.log("this.props.snippetLike.snippetLike", this.props);

        var itemsContent = [];
        if (this.props.snippetContent.snippetContent != null) {
            itemsContent.push(
                <div key={0} >
                    <ContentSnippetSharedX/>
                </div>
            );
        }

        //console.log("this.props.snippetContent.snippetContent", this.props);


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
                        <div className="mui-row" id="shared">
                            <div className="mui-col-md-3" id="folder">
                                <ListfoldersharedX/>
                            </div>
                            <div className="mui-col-md-3" id="snippet">
                                <ListsnippetsharedX initialValues={initialValue}/>
                            </div>
                            <div className="mui-col-md-6" id="content">
                                {itemsContent}
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

function mapStateToPropsContentSnippet(state) {
    console.log("hello state", state);

    if (typeof(state.snippetSelected) != "undefined" && state.snippetSelected) {
        for (var i = 0; i < state.data.usersFoldersShared.length; i++) {
            for (var j = 0; j < state.data.usersFoldersShared[i].folders.length; j++) {
                if (state.folderSelected == state.data.usersFoldersShared[i].folders[j]._id) {
                    for (var k = 0; k < state.data.usersFoldersShared[i].folders[j].snippets.length; k++) {
                        if (state.snippetSelected == state.data.usersFoldersShared[i].folders[j].snippets[k]._id) {
                            return {snippetContent: state.data.usersFoldersShared[i].folders[j].snippets[k]};
                        }
                    }
                }
            }
        }
    }
    return {snippetContent: {snippetContent: null}};
}

var SharedX = connect(
    mapStateToPropsContentSnippet,
    null
)(Shared);

module.exports = SharedX;