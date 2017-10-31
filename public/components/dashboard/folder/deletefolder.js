var React = require("react");
var connect = require('react-redux').connect;

class Deletefolder extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(data) {
        var componentDeleteFolder = this;
       $.ajax({
         type: "POST",
         url: "/deletefolder",
         data: {selectedFolder :"59f8511e2dad4e1fac9153a6"},
         success: function (data) {
           if (data.error != true) {
             componentDeleteFolder.props.handleSelectedFolder(data);
           }
       }
       });
        //this.props.handleSelectedFolder(id);
    }
    render() {
        return (
            <div>
                <a href="#">
                <i onClick={this.handleClick.bind(this, this.props.folderSelected)}
                 id="trashF" className="fa fa-trash-o" aria-hidden="true" />
                </a>
            </div>
        )
    }
}


function mapStateToPropsFolder(state) {
    return {folderSelected: state.usersdata.folderSelected};
        console.log("Le bon folder selectionné ?:", usersdata.folderSelected);
    //return {folderSelected: state.folderSelected};
}

function mapDispatchToPropsFolder(dispatch) {
    return {
        handleSelectedFolder: function(folderSelected) {
            dispatch({type: "deletefolder", folderSelected});
        }
    }
}

var DeleteFolderX = connect(
    mapStateToPropsFolder,
    mapDispatchToPropsFolder
)(Deletefolder);

module.exports = DeleteFolderX;
