var React = require("react");
var connect = require('react-redux').connect;

class Deletesnippet extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(values) {
         var componentSelectedFolder = {selectedSnippet:values, selectedFolder:  this.props.selectedFolder};

       $.ajax({
         type: "POST",
         url: "/deletesnippet",
         data: componentSelectedFolder,
         success: function (snippetSelected) {
       }
       });
             this.props.handleDeleteSnippet(values, this.props.selectedFolder);

    }

    render() {
        return (
            <div>
                <a href="#">
                <i onClick={this.handleClick.bind(this, this.props.selectedSnippet)}
                 id="trashF" className="fa fa-trash-o" aria-hidden="true" />
                </a>
            </div>
        )
    }
}


function mapStateToPropsFolder(state) {
    return {selectedFolder: state.folderSelected,
        selectedSnippet:state.snippetSelected};

}

function mapDispatchToPropsSnippet(dispatch) {
    return {
        handleDeleteSnippet: function( snippetSelected,folderSelected) {
            dispatch({type: "deletesnippet",
            folderSelected: folderSelected,
            snippetSelected: snippetSelected});
        }
    }
}

var DeleteSnippetX = connect(
    mapStateToPropsFolder,
    mapDispatchToPropsSnippet
)(Deletesnippet);

module.exports = DeleteSnippetX;
