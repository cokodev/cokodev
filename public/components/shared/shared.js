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
        var initialValueLikeFolder = {folderLike: this.props.folderLike};
        var initialValue = {snippetLike : this.props.snippetContent.snippetLike};
        var itemsContent = [];

        /*
for (var i=0; i<this.props.userSelected.length; i++ ) {
    for (var j=0; j<this.props.userSelected[i].folders.length; j++ ) {
        if (this.props.folderSelected == this.props.userSelected[i].folders[j]._id) {
            for (var k=0; k<this.props.userSelected[i].folders[j].snippets.length; k++ ) {
                "" = this.props.snippetSelected
            }
        }
    }
}*/

        if (this.props.snippetContent.snippetContent != null) {
            itemsContent.push(
                <div key={0} >
                    <ContentSnippetSharedX/>
                </div>
            );
        }

        if (this.props.userId != "undefined") {
            for (var i=0; i<this.props.userSelected.length; i++ ) {
                if (this.props.userId == this.props.userSelected[i]._id) {
                    for (var j=0; j<this.props.userSelected[i].folders.length; j++ ) {
                        if (this.props.folderSelected == this.props.userSelected[i].folders[j]._id) {
                            console.log("this.props.snippetSelected", this.props.snippetSelected);
                            var userSharedProfil =
                                <p id="profilUserShared">
                                    <span className="profilUserSharedItemLegend">
                                    Username :
                                    </span>
                                    <span className="mui--text-accent mui--text-title profilUserSharedItem">
                                        {this.props.userSelected[i].userName}
                                    </span>
                                    <span className="profilUserSharedItemLegend">
                                    Firstname :
                                    </span>
                                    <span className="mui--text-accent mui--text-title profilUserSharedItem">
                                        {this.props.userSelected[i].firstName}
                                    </span>
                                    <span className="profilUserSharedItemLegend">
                                    Lastname :
                                    </span>
                                    <span className="mui--text-accent mui--text-title profilUserSharedItem">
                                        {this.props.userSelected[i].lastName}
                                    </span>
                                </p>;
                            console.log("this.props.userSelected[i].userName", this.props.userSelected[i].userName);
                        }
                    }
                }
            }
            //console.log("this.props.userId", this.props.userId);
            //console.log("this.props.userSelected", this.props.userSelected);
        }
/*
        if (this.props.userId != "undefined") {
            for (var i=0; i<this.props.userSelected.length; i++ ) {
                if (this.props.userId == this.props.userSelected[i]._id) {
                    for (var j=0; j<this.props.userSelected[i].folders.length; j++ ) {
                        if (this.props.folderSelected == this.props.userSelected[i].folders[j]._id) {
                            console.log("this.props.snippetSelected", this.props.snippetSelected);
                            var userSharedProfil =
                                <p>
                                    {this.props.userSelected[i].userName}
                                    {this.props.userSelected[i].firstName}
                                    {this.props.userSelected[i].lastName}
                                </p>;
                            console.log("this.props.userSelected[i].userName", this.props.userSelected[i].userName);
                        }
                    }
                }
            }
            //console.log("this.props.userId", this.props.userId);
            //console.log("this.props.userSelected", this.props.userSelected);
        }*/

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
                                <ListfoldersharedX initialValues={initialValueLikeFolder}/>
                            </div>
                            <div className="mui-col-md-3" id="snippet">
                                <ListsnippetsharedX initialValues={initialValue}/>
                            </div>
                            <div className="mui-col-md-6" id="content">
                                {userSharedProfil}
                                {itemsContent}
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="mui-container mui--text-center">
                        <p>
                            Developers <a href="#">Gaspard Lehembreg</a>, <a href="#">Guillaume Suiffet</a>, <a href="#">Olivia Tastet</a>
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}

function mapStateToPropsContentSnippet(state) {
    console.log("statestatestate", state);
    if (typeof(state.snippetSelected) != "undefined" && state.snippetSelected) {
        for (var i = 0; i < state.data.usersFoldersShared.length; i++) {
            for (var j = 0; j < state.data.usersFoldersShared[i].folders.length; j++) {
                if (state.folderSelected == state.data.usersFoldersShared[i].folders[j]._id) {
                    for (var k = 0; k < state.data.usersFoldersShared[i].folders[j].snippets.length; k++) {
                        if (state.snippetSelected == state.data.usersFoldersShared[i].folders[j].snippets[k]._id) {
                            return {
                                snippetContent: state.data.usersFoldersShared[i].folders[j].snippets[k],
                                folderLike: state.data.usersFoldersShared[i].folders[j].folderLike,
                                userId: state.data.userId,
                                userSelected: state.data.usersFoldersShared,
                                folderSelected : state.folderSelected,
                                snippetSelected: state.snippetSelected
                            };
                        }
                    }
                }
            }
        }
    }
    return {snippetContent: {snippetContent: null}, userId: state.data.userId,
        userSelected: state.data.usersFoldersShared, folderSelected : state.folderSelected, snippetSelected: state.snippetSelected};
}

var SharedX = connect(
    mapStateToPropsContentSnippet,
    null
)(Shared);

module.exports = SharedX;
