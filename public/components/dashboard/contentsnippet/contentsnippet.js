var React = require("react");
var connect = require('react-redux').connect;
var ContentSnippetXForm = require("./content");
import Button from "muicss/lib/react/button";

import SyntaxHighlighter from 'react-syntax-highlighter';
import {hybrid} from 'react-syntax-highlighter/dist/styles';

class ContentSnippet extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(values){
        var componentSelectedFolder = this;
        var componentSelectedSnippet = this;
        var componentContentSnippet = this;
        values.selectedFolder = componentSelectedFolder.props.selectedFolder;
        values.selectedSnippet = componentSelectedSnippet.props.selectedSnippet;
        $.ajax({
            type: "POST",
            url: "/updatecontent",
            data: values,
            success: function (data) {
                if (data.error != true) {
                }
            }
        });
        componentContentSnippet.props.handleChangeContent(values.snippetContent, this.props.snippetContent._id);
    };

    componentDidMount() {
        $("#showContent").hide();
        $( "#editContent" ).click(function() {
            $("#showContent").slideToggle();
            $( "#editContent" ).hide();
            $("#SyntaxHighlighter").slideToggle();
        });
        $( "#submitContent" ).click(function() {
            $("#SyntaxHighlighter").slideToggle();
            $( "#editContent" ).show();
            $("#showContent").slideToggle();
        });
    }

    render() {
            var initialValue = {snippetContent : this.props.snippetContent.snippetContent};
            var code = (this.props.snippetContent.snippetContent) ? this.props.snippetContent.snippetContent : "";
        return (
            <div >
                <Button type="submit" value="Edit" id="editContent">EDIT</Button>

                <div className="easy2">
                    <div className="mui--text-center mui--align-bottom">
                    <span id="p2Back">
                      <a href="#">
                        <i className="fa fa-ellipsis-h" aria-hidden="true" />
                      </a>
                    </span>
                    </div>
                    <p>Message</p>
                </div>

                <div id="showContent">
                    <ContentSnippetXForm initialValues={initialValue} onSubmit={this.submit} id="ContentSnippetXForm"/>
                </div>

                <SyntaxHighlighter language='javascript' showLineNumbers style={hybrid} id="SyntaxHighlighter">
                    {code}
                </SyntaxHighlighter>

            </div>
        )
    }
}

function mapStateToPropsContentSnippet(state) {
    if (typeof(state.snippetSelected) != "undefined" && state.snippetSelected) {
        for (var i=0; i<state.usersdata.folders.length; i++ ) {
            if (state.folderSelected == state.usersdata.folders[i]._id) {
                for (var j = 0; j < state.usersdata.folders[i].snippets.length; j++) {
                    if (state.snippetSelected == state.usersdata.folders[i].snippets[j]._id) {
                        return {snippetContent: state.usersdata.folders[i].snippets[j], selectedFolder: state.folderSelected, selectedSnippet:state.snippetSelected};
                    }
                }
            }
        }
    }
    return {snippetContent : {snippetContent : null}};
}

function mapDispatchToPropsContentSnippet(dispatch) {
    return {
        handleChangeContent: function(snippetContent, idsnippet) {
            dispatch({type: "snippetContent", snippetContent: snippetContent, idsnippet: idsnippet});
        }
    }
}

var ContentSnippetX = connect(
    mapStateToPropsContentSnippet,
    mapDispatchToPropsContentSnippet
)(ContentSnippet);

module.exports = ContentSnippetX;