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
                <AddSnippetXForm onSubmit={this.submit}/>
                <DeleteSnippetX/>
            </div>
        )
    }
}

function mapStateToPropsFolder(state) {
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
