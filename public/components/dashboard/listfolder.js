var React = require('react');
var connect = require('react-redux').connect;

class Listfolder extends React.Component {
    constructor() {
        super();
    }
    render() {
        var itemsList = [];
        for(var i=0; i<this.props.folder.length; i++ ) {
            itemsList.push(
                <li key={i}>
                    <div id="fo-folder" className="mui-row">
                        <a href="#">
                            <img
                                src="images/folder.png"
                                alt="image folder"
                                className="image"
                            />
                        </a>
                        <h5>{this.props.folder[i].titleFolder}</h5>
                        <p>{this.props.folder[i].DescriptionFolder}</p>
                    </div>
                </li>);
            //console.log("this.props.folder",this.props.folder);
        }
        return (
            <div>
                <ul>
                    {itemsList}
                </ul>
            </div>
        )
    }
}

function mapStateToPropsFolder(state) {
    return {folder: state.folder};
}

var ListFolderX = connect(
    mapStateToPropsFolder,
    null
)(Listfolder);

module.exports = ListFolderX;