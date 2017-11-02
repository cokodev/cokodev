var React = require("react");
var connect = require('react-redux').connect;
var ContentSnippetXForm = require("./content");

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

    render() {
        const initialValue = {snippetContent : this.props.snippetContent.snippetContent};
        return (
            <div >
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
                <ContentSnippetXForm initialValues={initialValue} onSubmit={this.submit}/>
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
    } else {
        return {snippetContent : {snippetContent : null}};
    }
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