var React = require("react");
var connect = require('react-redux').connect;
var FolderX = require("./folder/headerfolder");
var ListFolderX = require("./folder/listfolder");
var SnippetX = require("./snippet/headersnippet");
var ListSnippetX = require("./snippet/listsnippet");
var ContentSnippetX = require("./contentsnippet/contentsnippet");

class DashboardBody extends React.Component {
    constructor() {
        super();
    }
    render() {
        var itemsContent = [];
        if (this.props.snippetContent.snippetContent != null) {
            itemsContent.push(
                <div key={0} >
                    <ContentSnippetX/>
                </div>
            );
        }
        var itemHeaderSnippet = [];
        if (this.props.folderSelected != "") {
            itemHeaderSnippet.push(
                <div key={0}>
                    <SnippetX/>
                </div>
            );
        }
        return (
            <div id="app">
                <div className="mui-container-fluid">
                    <div className="mui-row">
                        <div className="mui-col-md-3" id="folder">
                            <FolderX/>
                            <ListFolderX/>
                        </div>
                        <div className="mui-col-md-3" id="snippet">
                            {itemHeaderSnippet}
                            <ListSnippetX/>
                        </div>
                        <div className="mui-col-md-6" id="content">
                            {itemsContent}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToPropsSnippet(state) {
    if (typeof(state.snippetSelected) != "undefined" && state.snippetSelected) {
        for (var i=0; i<state.usersdata.folders.length; i++ ) {
            if (state.folderSelected == state.usersdata.folders[i]._id) {
                for (var j = 0; j < state.usersdata.folders[i].snippets.length; j++) {
                    if (state.snippetSelected == state.usersdata.folders[i].snippets[j]._id) {
                        return {snippetContent: state.usersdata.folders[i].snippets[j]};
                    }
                }
            }
        }
    }
    return {snippetContent : {snippetContent : null}, folderSelected: state.folderSelected};
}

var DashboardBodyX = connect(
    mapStateToPropsSnippet,
    null
)(DashboardBody);

module.exports = DashboardBodyX;