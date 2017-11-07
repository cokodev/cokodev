var React = require("react");
var connect = require('react-redux').connect;

import SyntaxHighlighter from 'react-syntax-highlighter';
import {hybrid} from 'react-syntax-highlighter/dist/styles';

class ContentSnippetShared extends React.Component {
    constructor() {
        super();
    }
    render() {
        var code = (this.props.snippetContent.snippetContent) ? this.props.snippetContent.snippetContent : "";
        var languageType = this.props.snippetContent.languageType;
        return (
            <div >
                <SyntaxHighlighter showLineNumbers language={languageType} style={hybrid} id="SyntaxHighlighter">
                  {code}
                </SyntaxHighlighter>
            </div>
        )
    }
}

function mapStateToPropsContentSnippet(state) {
    if (typeof(state.snippetSelected) != "undefined" && state.snippetSelected) {
        for (var i=0; i<state.usersdata.length; i++ ) {
            for (var j=0; j<state.usersdata[i].folders.length; j++ ) {
                for (var k=0; k<state.usersdata[i].folders[j].snippets.length; k++ ) {
                    if (state.folderSelected == state.usersdata[i].folders[j]._id) {
                        if (state.snippetSelected == state.usersdata[i].folders[j].snippets[k]._id) {
                            return {snippetContent: state.usersdata[i].folders[j].snippets[k],
                                selectedFolder: state.folderSelected,
                                snippetSelected:state.snippetSelected
                            };
                        }
                    }
                }
            }
        }
    }
    return {snippetContent : {snippetContent : null}, snippetSelected: state.snippetSelected};
}

var ContentSnippetSharedX = connect(
    mapStateToPropsContentSnippet,
    null
)(ContentSnippetShared);

module.exports = ContentSnippetSharedX;
