var React = require('react');
var connect = require('react-redux').connect;

class Listsnippetshared extends React.Component {
    constructor() {
        super();
    }

    handleClick(id) {
        this.props.handleSelectedSnippet(id);
    };

    render() {
        var snippetShared = [];
        var Listsnippetshared = [];
        for (var i=0; i<this.props.userShared.length; i++ ) {
            for (var j=0; j<this.props.userShared[i].folders.length; j++ ) {
                if (this.props.folderSelected == this.props.userShared[i].folders[j]._id) {
                    var parapheFirstName = this.props.userShared[i].firstName.slice(0,1);
                    var parapheLastName = this.props.userShared[i].lastName.slice(0,1);
                    var paraphe = parapheFirstName + parapheLastName;
                    var parapheToUppercase = paraphe.toUpperCase();
                    snippetShared = this.props.userShared[i].folders[j].snippets;
                    for (var k=0; k<snippetShared.length; k++ ) {
                        var className = null;
                        if (this.props.snippetSelected == snippetShared[k]._id) {
                            className = "folder-selected";
                        }
                        Listsnippetshared.push(
                            <li onClick={this.handleClick.bind(this, this.props.userShared[i].folders[j].snippets[k]._id)} className="mui-row">
                                <div id="sn-snippet" className={className}>
                                    <div>
                                        <span className="userShared">{parapheToUppercase}</span>
                                    </div>
                                    <h5>{snippetShared[k].snippetName}</h5>
                                    <p>{snippetShared[k].snippetDescription}</p>
                                    <p>
                                        <span id="snippettag">{snippetShared[k].languageType}</span>
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
    return {folderSelected: state.folderSelected, userShared : state.data, snippetSelected: state.snippetSelected};
}

function mapDispatchToPropsSnippetShared(dispatch) {
    return {
        handleSelectedSnippet: function(snippetSelected) {
            dispatch({type: "selectedsnippet", snippetSelected: snippetSelected});
        }
    };
}

var ListsnippetsharedX = connect(
    mapStateToPropsSnippetShared,
    mapDispatchToPropsSnippetShared
)(Listsnippetshared);

module.exports = ListsnippetsharedX;