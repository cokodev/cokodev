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

     countLike.selectedFolder = this.props.folderSelected;
     countLike.selectedSnippet =this.props.snippetSelected;

       for (var i=0; i<countLike.length; i++ ) {
             for (var j=0; j<countLike[i].folders.length; j++ ) {
                 if (this.props.folderSelected == countLike[i].folders[j]._id) {
                     for (var k = 0; k < countLike[i].folders[j].snippets.length; k++) {
                         if (this.props.snippetSelected == countLike[i].folders[j].snippets[k]._id) {
                              countLike.snippetLike = this.props.userShared[i].folders[j].snippets[k].snippetLike;
                              countLike._id =countLike[i]._id;
                             break;
                             }
                       }
                    break;
               }
          }
     }

  var componentSelectedSnippetLike = {selectedFolder:  this.props.folderSelected,
      selectedSnippet:this.props.snippetSelected, snippetLike: countLike.snippetLike,folderLike: countLike.folderLike, _id:countLike._id };
        $.ajax({
          type: "POST",
          url: "/updatecountlike",
          data: componentSelectedSnippetLike,
          success: function () {
        }
    });
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
                            var likePerso =
                                <i className="fa fa-thumbs-up" aria-hidden="true">{this.props.userShared[i].folders[j].snippets[k].snippetLike}</i>;
                        } else {
                            likePerso = null;
                        }
                        if (this.props.snippetSelected != snippetShared[k]._id) {
                            var nblike =
                                <span id="countLike">
                                    <i className="fa fa-thumbs-o-up" aria-hidden="true"> {this.props.userShared[i].folders[j].snippets[k].snippetLike}</i>

                                </span>;

                        } else {
                            nblike = null;
                        }
                         console.log("nbre de likkkke après :", this.props.userShared[i].folders[j].snippets[k].snippetLike);
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
                                    {nblike}
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
            dispatch({type:"countLike", countLike: countLike, folderSelected: folderSelected, snippetSelected:snippetSelected})
        }
    };
}

var ListsnippetsharedX = connect(
    mapStateToPropsSnippetShared,
    mapDispatchToPropsSnippetShared
)(Listsnippetshared);

module.exports = ListsnippetsharedX;
