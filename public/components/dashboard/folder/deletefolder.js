var React = require("react");
var connect = require('react-redux').connect;

class Deletefolder extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(id) {
        console.log(" id du deletefolder.js:",id);

       $.ajax({
         type: "POST",
         url: "/deletefolder",
         data: {selectedFolder : id},
         success: function (folderSelected) {
       }
       });
        this.props.handleSelectedFolder(id);
    }
    render() {
        return (
            <div>
                <a href="#">
                <i onClick={this.handleClick.bind(this, this.props.folderSelected)}
                 className="fa fa-trash" aria-hidden="true" />
                </a>
            </div>
        )
    }
}


function mapStateToPropsFolder(state) {
    return {folderSelected: state.folderSelected};
}

function mapDispatchToPropsFolder(dispatch) {
    return {
        handleSelectedFolder: function(folderSelected) {
            dispatch({type: "deletefolder", folderSelected: folderSelected});
        }
    }
}

var DeleteFolderX = connect(
    mapStateToPropsFolder,
    mapDispatchToPropsFolder
)(Deletefolder);

module.exports = DeleteFolderX;
