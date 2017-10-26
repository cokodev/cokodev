var React = require('react');
var connect = require('react-redux').connect;
var UpdateFolderXForm = require('./updatefolder');

class Listfolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {folder: ""};
        this.submit = this.submit.bind(this);
    }
    submit(values){
        console.log("valuesSubmitUpdate",values);
        this.props.handleChange(values);
    };
    render() {
        var itemsFolder = [];
        for(var i=0; i<this.props.folder.length; i++ ) {
            itemsFolder.push(
                <li key={i}>
                    <div id="fo-folder" className="mui-row">
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
    return {folder: state.folder};
}

function mapDispatchToPropsFolder(dispatch) {
    return {
        handleChange: function(folder) {
            dispatch({type: "updatefolder", folder: folder});
        }
    }
}

var ListFolderX = connect(
    mapStateToPropsFolder,
    mapDispatchToPropsFolder
)(Listfolder);

module.exports = ListFolderX;