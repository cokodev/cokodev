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
          data:  {folderName:values.folderName,
              folderDescription:values.folderDescription,
              folderStatus:values.folderStatus,
              selectedFolder:values.id },
          success: function () {
        }
        });
        this.props.handleChange(values);
    };
    handleClick(id) {
        this.props.handleSelectedFolder(id);
    };
    render() {
        var itemsFolder = [];
        var status = [];

        for(var i=0; i<this.props.folder.length; i++ ) {
            var className = null;
            if (this.props.folderSelected == this.props.folder[i]._id) {
                className = "folder-selected";
            }
             if (this.props.folder[i].folderStatus == "shared" ) {
                status = <span className="folder-shared"><i  className="fa fa-share" aria-hidden="true"></i></span>;
            }
            else {
                    status = " ";
            }

            itemsFolder.push(
                <li key={i} onClick={this.handleClick.bind(this, this.props.folder[i]._id) } className="mui-row">
                    <div id="fo-folder" className={className}>
                        <UpdateFolderXForm onSubmit={this.submit} folder={this.props.folder[i]}/>
                        <span><h5>{this.props.folder[i].folderName}  {status} </h5></span>
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
