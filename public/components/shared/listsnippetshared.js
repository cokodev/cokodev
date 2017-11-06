var React = require('react');
var connect = require('react-redux').connect;

class Listsnippetshared extends React.Component {
    constructor() {
        super();
    }
    render() {
        var snippetShared = [];
        var Listsnippetshared = [];
        for (var i=0; i<this.props.userShared.length; i++ ) {
            for (var j=0; j<this.props.userShared[i].folders.length; j++ ) {
                if (this.props.folderSelected == this.props.userShared[i].folders[j]._id) {
                    if (this.props.userShared[i].userName.length > 7) {
                        var usernameLong = this.props.userShared[i].userName;
                        var usernameOk = usernameLong.slice(0, 5);
                    } else {
                        usernameOk = this.props.userShared[i].userName;
                    }
                    snippetShared = this.props.userShared[i].folders[j].snippets;
                    for (var k=0; k<snippetShared.length; k++ ) {
                        console.log("this.props.userShared[i].folders[j].snippets.length", this.props.userShared[i].folders[j].snippets.length);
                        Listsnippetshared.push(
                            <li>
                                <div id="sn-snippet" className="mui-row">
                                    <div>
                                        <span className="userShared">{usernameOk}</span>
                                    </div>
                                    <h5>{snippetShared[k].snippetName}</h5>
                                    <p>{snippetShared[k].snippetDescription}</p>
                                    <p><span id="snippettag">{snippetShared[k].snippetTag}</span>
                                        <span id="folderonsnippet">{this.props.userShared[i].folders[j].folderName}</span>
                                    </p>
                                </div>
                            </li>
                        );
                    }
                }
            }
        }
        return (
            <div>
                <ul>
                    {Listsnippetshared}
                </ul>
            </div>
        )
    }
}

function mapStateToPropsSnippetShared(state) {
    return {folderSelected: state.folderSelected, userShared : state.usersdata};
}

var ListsnippetsharedX = connect(
    mapStateToPropsSnippetShared,
    null
)(Listsnippetshared);

module.exports = ListsnippetsharedX;