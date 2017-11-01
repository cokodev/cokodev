var React = require('react');
var connect = require('react-redux').connect;

class Listfolder extends React.Component {
    constructor() {
        super();
        //this.state = {snippet: "", snippetSelected: null};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(id) {
        this.props.handleSelectedSnippet(id);
    };
    render() {
        for (var i=0; i<this.props.folders.length; i++ ) {
            if (this.props.folderSelected == this.props.folders[i]._id) {
                var itemsSnippet = [];
                for(var j=0; j<this.props.folders[i].snippets.length; j++ ) {
                    var className = null;
                    if (this.props.snippetSelected == this.props.folders[i].snippets[j]._id) {
                        className = "folder-selected";
                    }
                    itemsSnippet.push(
                        <li key={i} onClick={this.handleClick.bind(this, this.props.folders[i].snippets[j]._id)} className="mui-row">
                            <div id="sn-snippet" className={className}>
                                <a href="#">
                                    <img
                                        src="img/snippet.png"
                                        alt="image snippet"
                                        className="image"
                                    />
                                </a>
                                <h5>{this.props.folders[i].snippets[j].snippetName}</h5>
                                <p>{this.props.folders[i].snippets[j].snippetDescription}</p>
                                <p>
                                    <span id="snippettag">{this.props.folders[i].snippets[j].snippetTag}</span>
                                    <span id="folderonsnippet">{this.props.folders[i].folderName}</span>
                                </p>
                            </div>
                        </li>
                    );
                }
            }
            break;
        }
        return (
            <div>
                <ul>
                    {itemsSnippet}
                </ul>
            </div>
        )
    }
}

function mapStateToPropsSnippet(state) {
    return {folders: state.usersdata.folders, snippetSelected: state.snippetSelected, folderSelected: state.folderSelected};
}

function mapDispatchToPropsSnippet(dispatch) {
    return {
        handleSelectedSnippet: function(snippetSelected) {
            dispatch({type: "selectedsnippet", snippetSelected: snippetSelected});
        }
    }
}

var ListSnippetX = connect(
    mapStateToPropsSnippet,
    mapDispatchToPropsSnippet
)(Listfolder);

module.exports = ListSnippetX;