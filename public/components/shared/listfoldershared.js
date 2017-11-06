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
                if (this.props.userShared[i].folders[j].folderStatus == "shared") {
                    if (this.props.userShared[i].userName.length > 7) {
                        var usernameLong = this.props.userShared[i].userName;
                        var usernameOk = usernameLong.slice(0, 5);
                    } else {
                        usernameOk = this.props.userShared[i].userName;
                    }
                    if (this.props.folderSelected == this.props.userShared[i].folders[j]._id) {
                        className = "folder-selected";
                    }
                    listfoldershared.push(
                        <li onClick={this.handleClick.bind(this, this.props.userShared[i].folders[j]._id)}>
                            <div className="mui-row">
                                <div id="fo-folder" className={className}>
                                    <div>
                                        <span className="userShared">{usernameOk}</span>
                                    </div>
                                    <h5><span id="title-folder">{this.props.userShared[i].folders[j].folderName}</span></h5>
                                    <p>
                                        {this.props.userShared[i].folders[j].folderDescription}
                                    </p>
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
    return {userShared : state.usersdata, folderSelected: state.folderSelected};
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