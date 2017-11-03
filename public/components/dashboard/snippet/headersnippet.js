var React = require("react");
var AddSnippetXForm = require("./addsnippet");
var DeleteSnippetX = require("./deletesnippet");
var connect = require('react-redux').connect;

class Headersnippet extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(values){
        var componentAddSnippet = this;
        values.selectedFolder = this.props.folderSelected;
        $.ajax({
            type: "POST",
            url: "/addsnippet",
            data: values,
            success: function (data) {
                if (data.error != true) {

                    componentAddSnippet.props.handleChange(data, values);
                }
            }
        });
    };
    render() {

        return (
            <div id="header" className="mui-row">
                <AddSnippetXForm onSubmit={this.submit} fold={this.props.folderN}/>
                <DeleteSnippetX/>
            </div>
        )
    }
}

function mapStateToPropsFolder(state) {
    for (var i=0; i<state.usersdata.folders.length; i++ ) {
        if (state.folderSelected == state.usersdata.folders[i]._id) {
               return {folderSelected: state.folderSelected, folderN: state.usersdata.folders[i].folderName};
           }
    }
    return {folderSelected: state.folderSelected};
}

function mapDispatchToPropsSnippet(dispatch) {
    return {
        handleChange: function(snippet, selectedFolder) {
            console.log("snippet99", snippet);
            dispatch({type: "addsnippet", snippet: snippet, selectedFolder: selectedFolder});
        }
    }
}

var SnippetX = connect(
    mapStateToPropsFolder,
    mapDispatchToPropsSnippet
)(Headersnippet);

module.exports = SnippetX;
