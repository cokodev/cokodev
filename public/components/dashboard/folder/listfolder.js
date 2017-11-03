var React = require('react');
var connect = require('react-redux').connect;
var UpdateFolderXForm = require('./updatefolder');

class Listfolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {folder: "", folderSelected: null};
        this.submit = this.submit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    submit(values){
        $.ajax({
          type: "POST",
          url: "/updatefolder",
          data:  {folderName:values.folderName, folderDescription:values.folderDescription, folderStatus:values.folderStatus, selectedFolder:values.id },
          success: function () {
        }
        });
        console.log("valuesSubmitUpdate",values);
        this.props.handleChange(values);
    };
    handleClick(id) {
        console.log('click detected hello', id);
        this.props.handleSelectedFolder(id);
    };
    render() {
        var itemsFolder = [];
        console.log("this.props.folder", this.props.folder);
        for(var i=0; i<this.props.folder.length; i++ ) {
            var className = null;
            //id du folder modifié avec l'_id du folder de la BD
            if (this.props.folderSelected == this.props.folder[i]._id) {
                className = "folder-selected";
            }
            itemsFolder.push(
                <li key={i} onClick={this.handleClick.bind(this, this.props.folder[i]._id)} className="mui-row">
                    <div id="fo-folder" className={className}>
                        <UpdateFolderXForm onSubmit={this.submit} folder={this.props.folder[i]}/>
                        <h5>{this.props.folder[i].folderName}</h5>
                        <p>{this.props.folder[i].folderDescription}</p>
                    </div>
                </li>
            );
        }
        return (
            <div>
                <ul>
                    {itemsFolder}
                </ul>
            </div>
        )
    }
}

function mapStateToPropsFolder(state) {
    //state du folder modifié avec les données du user loggé : usersdata
    return {folder: state.usersdata.folders, folderSelected: state.folderSelected};
}

function mapDispatchToPropsFolder(dispatch) {
    return {
        handleChange: function(folder) {
            dispatch({type: "updatefolder", folder:folder});
        },
        handleSelectedFolder: function(folderSelected) {
            dispatch({type: "selectedfolder", folderSelected: folderSelected});
        }
    }
}

var ListFolderX = connect(
    mapStateToPropsFolder,
    mapDispatchToPropsFolder
)(Listfolder);

module.exports = ListFolderX;
