var React = require('react');
var connect = require('react-redux').connect;

class Listfoldershared extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        var componentAllUsersFoldersShared=this;
        $.ajax({
            type: "POST",
            url: "/shared",
            success: function (data) {
                componentAllUsersFoldersShared.props.getData(data);
            }
        });
    }

    handleClick(id) {
        this.props.handleSelectedFolder(id);
    };

    render() {
        var listfoldershared = [];
        for (var i=0; i<this.props.userShared.length; i++ ) {
            for (var j=0; j<this.props.userShared[i].folders.length; j++ ) {
                var className = null;
                if (this.props.userShared[i].folders[j].folderStatus == "shared" && this.props.userShared[i].firstName != null && this.props.userShared[i].lastName != null) {
                    var parapheFirstName = this.props.userShared[i].firstName.slice(0,1);
                    var parapheLastName = this.props.userShared[i].lastName.slice(0,1);
                    var paraphe = parapheFirstName + parapheLastName;
                    var parapheToUppercase = paraphe.toUpperCase();
                    
                    if (this.props.folderSelected == this.props.userShared[i].folders[j]._id) {
                        className = "folder-selected";
                    }
                    listfoldershared.push(
                        <li onClick={this.handleClick.bind(this, this.props.userShared[i].folders[j]._id)}>
                            <div className="mui-row">
                                <div id="fo-folder" className={className}>
                                    <div>
                                        <a href="#">
                                            <span className="userShared">{parapheToUppercase}</span>
                                            <i className="fa fa-folder sharedfolder" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <h5> <span id="title-folder">{this.props.userShared[i].folders[j].folderName}</span></h5>
                                    <p>
                                        {this.props.userShared[i].folders[j].folderDescription}
                                    </p>
                                    <span id="countLike">
                                    <i className="fa fa-thumbs-o-up" aria-hidden="true">  {this.props.userShared[i].folders[j].folderLike}</i>
                                    </span>
                                </div>
                            </div>
                        </li>
                    );
                }
            }
        }
        return (
            <div>
                <ul>
                    {listfoldershared}
                </ul>
            </div>
        )
    }
}

function mapStateToPropsFolderShared(state) {
    return {userShared : state.data.usersFoldersShared, folderSelected: state.folderSelected};
}

function mapDispatchToPropsFolderShared(dispatch) {
    return {
        getData: function(users) {
            dispatch({type: "users", users: users});
        },
        handleSelectedFolder: function(folderSelected) {
            dispatch({type: "selectedfolder", folderSelected: folderSelected});
        }
    };
}

var ListfoldersharedX = connect(
    mapStateToPropsFolderShared,
    mapDispatchToPropsFolderShared
)(Listfoldershared);

module.exports = ListfoldersharedX;
