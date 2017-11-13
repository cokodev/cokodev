var React = require('react');
var connect = require('react-redux').connect;

class Listsnippetshared extends React.Component {
    constructor() {
        super();
    }

    handleClick(id) {
        this.props.handleSelectedSnippet(id);
    };

    handleClickLike(countLike) {
        /*
        var like;
        for (var i=0; i<countLike.length; i++ ) {
            for (var j=0; j<countLike[i].folders.length; j++ ) {
                for (var k=0; k<countLike[i].folders[j].snippets.length; k++ ) {
                    like = countLike[i].folders[j].snippets[k].snippetLike;
                    console.log("like2", like)
                }
            }
        }*/
        //console.log("like1", like);
        this.props.handleLikeSnippet(countLike, this.props.folderSelected, this.props.snippetSelected);
    }

    render() {

        var snippetShared = [];
        var Listsnippetshared = [];
        for (var i=0; i<this.props.userShared.length; i++ ) {
            for (var j=0; j<this.props.userShared[i].folders.length; j++ ) {

                if (this.props.folderSelected == this.props.userShared[i].folders[j]._id) {
                    snippetShared = this.props.userShared[i].folders[j].snippets;
                    for (var k=0; k<snippetShared.length; k++ ) {
                        var className = null;
                        if (this.props.snippetSelected == snippetShared[k]._id) {
                            className = "folder-selected";
                        }

                        if (this.props.userShared[i]._id != this.props.usersdata._id && this.props.snippetSelected == snippetShared[k]._id) {
                            var likePerso = <i className="fa fa-thumbs-up" aria-hidden="true">{this.props.userShared[i].folders[j].snippets[k].snippetLike}</i>;
                        } else {
                            likePerso = null;
                        }

                        Listsnippetshared.push(
                            <li onClick={this.handleClick.bind(this, this.props.userShared[i].folders[j].snippets[k]._id)} className="mui-row">
                                <div id="sn-snippet" className={className}>
                                    <div>
                                        <i className="fa fa-file" aria-hidden="true"></i>
                                    </div>
                                    <h5>{snippetShared[k].snippetName}</h5>
                                    <p>{snippetShared[k].snippetDescription}</p>
                                    <a href="#" onClick={this.handleClickLike.bind(this, this.props.userShared)}>
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
    console.log("stateRARARAR", state);
    return {folderSelected: state.folderSelected, userShared : state.data.usersFoldersShared, snippetSelected: state.snippetSelected, usersdata: state.usersdata};
}

function mapDispatchToPropsSnippetShared(dispatch) {
    return {
        handleSelectedSnippet: function(snippetSelected) {
            dispatch({type: "selectedsnippet", snippetSelected: snippetSelected});
        },
        handleLikeSnippet: function(countLike, folderSelected, snippetSelected) {
            console.log("countLike2", snippetSelected);
            dispatch({type:"countLike", countLike: countLike, folderSelected: folderSelected, snippetSelected:snippetSelected})
        }
    };
}

var ListsnippetsharedX = connect(
    mapStateToPropsSnippetShared,
    mapDispatchToPropsSnippetShared
)(Listsnippetshared);

module.exports = ListsnippetsharedX;
