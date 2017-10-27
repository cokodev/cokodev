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
        console.log("valuesSubmitUpdate",values);
        this.props.handleChange(values);
    };
    handleClick(id) {
        console.log('click detected hello', id);
        this.props.handleSelectedFolder(id);
    };
    render() {

        //if (this.props.folderSelected == ) {
            //console.log("this.props.folderid", this.props.folderid);
            //console.log("this.props.folderSelected", this.props.folderSelected);
            //console.log("this.props.folderSelected == this.props.folder.id" ,this.props.folderSelected + "==" + this.props.folder.id);
            //className = "folder-selected";
        //}
        var itemsFolder = [];
        for(var i=0; i<this.props.folder.length; i++ ) {

            var className = null;
            if (this.props.folderSelected == this.props.folder[i].id) {
                console.log("hello this.props.folder[i].id", this.props.folder[i].id);
                console.log("this.props.folderSelected", this.props.folderSelected);
                className = "folder-selected";
            }

            itemsFolder.push(
                <li key={i} onClick={this.handleClick.bind(this, this.props.folder[i].id)} className="mui-row">
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
    return {folder: state.folder, folderSelected: state.folderSelected};
}

function mapDispatchToPropsFolder(dispatch) {
    return {
        handleChange: function(folder) {
            dispatch({type: "updatefolder", folder: folder});
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