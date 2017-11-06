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


    render() {
        var listfoldershared = [];
        for (var i=0; i<this.props.userShared.length; i++ ) {
            console.log("this.props.userShared[i].userName", this.props.userShared[i].userName);
            for (var j=0; j<this.props.userShared[i].folders.length; j++ ) {
                if (this.props.userShared[i].folders[j].folderStatus == "shared") {
                    if (this.props.userShared[i].userName.length > 7) {
                        var usernameLong = this.props.userShared[i].userName;
                        var usernameOk = usernameLong.slice(0, 5);
                        console.log("usernameLong", usernameOk);
                    } else {
                        usernameOk = this.props.userShared[i].userName;
                    }
                    listfoldershared.push(
                        <li>
                            <div className="mui-row">
                                <div id="fo-folder">
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
                    console.log("Listfoldershared", listfoldershared);
                }
            }
        }
        //console.log("itemsSnippet", itemsSnippet);
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
    //state du folder modifié avec les données du user loggé : usersdata
    console.log("state!!!111111,", state.usersdata);
    return {userShared : state.usersdata};
}

function mapDispatchToPropsFolderShared(dispatch) {
    return {
        getData: function(users) {
            dispatch({type: "users", users: users});
        }
    };
}

var ListfoldersharedX = connect(
    mapStateToPropsFolderShared,
    mapDispatchToPropsFolderShared
)(Listfoldershared);

module.exports = ListfoldersharedX;