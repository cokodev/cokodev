var React = require("react");
var connect = require('react-redux').connect;
var HeaderX = require("../header/header");
var UserProfileX = require("./userProfile");
/*var FolderX = require("./folder/headerfolder");
var ListFolderX = require("./folder/listfolder");

var ListSnippetX = require("./snippet/listsnippet");*/

var Link = require("react-router-dom").Link;

class Profile extends React.Component {
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
                                <a href="/shared"><button className="mui-btn mui-btn--primary" id="goShared">Shared</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="app">
                <div className="mui-container-fluid">

                            <UserProfileX/>

                </div>
            </div>


                <footer>
                    <div className="mui-container mui--text-center">
                        <p>
                        
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}

/*function mapStateToPropsContentSnippet(state) {
    if (typeof(state.snippetSelected) != "undefined" && state.snippetSelected) {
        for (var i = 0; i < state.usersdata.length; i++) {
            for (var j = 0; j < state.usersdata[i].folders.length; j++) {
                if (state.folderSelected == state.usersdata[i].folders[j]._id) {
                    for (var k = 0; k < state.usersdata[i].folders[j].snippets.length; k++) {
                        if (state.snippetSelected == state.usersdata[i].folders[j].snippets[k]._id) {
                            return {snippetContent: state.usersdata[i].folders[j].snippets[k]};
                        }
                    }
                }
            }
        }
    }
    return {snippetContent: {snippetContent: null}};
}

var ProfileX = connect(
    mapStateToPropsContentSnippet,
    null
)(Profile);*/

module.exports = Profile;
