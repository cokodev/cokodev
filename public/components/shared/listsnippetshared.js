var React = require('react');
var connect = require('react-redux').connect;

class Listsnippetshared extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickLike = this.handleClickLike.bind(this);
    }

    handleClick(id) {
        this.props.handleSelectedSnippet(id);
    };

    handleClickLike(countLike) {
        this.props.handleLikeSnippet(countLike);
    }

    render() {
        var snippetShared = [];
        var Listsnippetshared = [];
        for (var i=0; i<this.props.userShared.length; i++ ) {
            for (var j=0; j<this.props.userShared[i].folders.length; j++ ) {
                if (this.props.userShared[i]._id != this.props.usersdata._id) {
                    var likePerso = <i className="fa fa-thumbs-up" aria-hidden="true"></i>;
                } else
                    likePerso = null;
                if (this.props.folderSelected == this.props.userShared[i].folders[j]._id) {
                    /*
                    var parapheFirstName = this.props.userShared[i].firstName.slice(0,1);
                    var parapheLastName = this.props.userShared[i].lastName.slice(0,1);
                    var paraphe = parapheFirstName + parapheLastName;
                    var parapheToUppercase = paraphe.toUpperCase();
                    */
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
                                        <i className="fa fa-file" aria-hidden="true"></i>
                                    </div>
                                    <h5>{snippetShared[k].snippetName}</h5>
                                    <p>{snippetShared[k].snippetDescription}</p>
                                    <a href="#" onClick={this.handleClickLike}>
                                        {likePerso}
                                    </a>
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
    return {folderSelected: state.folderSelected, userShared : state.data, snippetSelected: state.snippetSelected, usersdata: state.usersdata};
}

function mapDispatchToPropsSnippetShared(dispatch) {
    return {
        handleSelectedSnippet: function(snippetSelected) {
            dispatch({type: "selectedsnippet", snippetSelected: snippetSelected});
        },
        handleLikeSnippet: function(countLike) {
            dispatch({type:"countLike", countLike: countLike})
        }
    };
}

var ListsnippetsharedX = connect(
    mapStateToPropsSnippetShared,
    mapDispatchToPropsSnippetShared
)(Listsnippetshared);

module.exports = ListsnippetsharedX;