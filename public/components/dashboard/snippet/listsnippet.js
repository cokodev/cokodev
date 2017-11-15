var React = require('react');
var connect = require('react-redux').connect;
var UpdateSnippetXForm = require('./updatesnippet');

class Listsnippet extends React.Component {
    constructor() {
        super();
        //this.state = {snippet: "", snippetSelected: null};
        this.submit = this.submit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    submit(values){
         values.selectedFolder = this.props.folderSelected;
         values.selectedSnippet =this.props.snippetSelected;
        $.ajax({
          type: "POST",
          url: "/updatesnippet",
          data:  values,
          success: function () {
        }
    });
        this.props.handleChange(values,this.props.folderSelected,this.props.snippetSelected);
    };

    handleClick(id) {
        this.props.handleSelectedSnippet(id);
    };
    render() {
        var itemsSnippet = [];
        if (this.props.folders != "undefined") {
            for (var i=0; i<this.props.folders.length; i++ ) {
                if (this.props.folderSelected == this.props.folders[i]._id) {
                    for(var j=0; j<this.props.folders[i].snippets.length; j++ ) {
                        var className = null;
                        if (this.props.snippetSelected == this.props.folders[i].snippets[j]._id) {
                            className = "folder-selected";
                        }
                        itemsSnippet.push(
                            <li key={j} onClick={this.handleClick.bind(this, this.props.folders[i].snippets[j]._id)} className="mui-row">
                                <div id="sn-snippet" className={className}>
                                    <UpdateSnippetXForm onSubmit={this.submit} snippet={this.props.folders[i].snippets[j]}/>
                                    <h5>{this.props.folders[i].snippets[j].snippetName}</h5>
                                    <p>{this.props.folders[i].snippets[j].snippetDescription}</p>
                                    <p>
                                        <span id="snippettag">{this.props.folders[i].snippets[j].languageType}</span>
                                        <span id="folderonsnippet">{this.props.folders[i].folderName}</span>
                                    </p>
                                </div>
                            </li>
                        );
                    }
                    break;
                }
            }
        }
        console.log("itemsSnippet", itemsSnippet);
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
    return {folders: state.usersdata.folders,
                folderSelected: state.folderSelected,
                snippetSelected: state.snippetSelected};
}

function mapDispatchToPropsSnippet(dispatch) {
    return {
        handleChange: function(snippet, folderSelected,snippetSelected ) {
            dispatch({type: "updatesnippet", snippet: snippet, folderSelected: folderSelected,
            snippetSelected: snippetSelected});
        },
        handleSelectedSnippet: function(snippetSelected) {
            dispatch({type: "selectedsnippet", snippetSelected: snippetSelected});
        }
    }
}

var ListSnippetX = connect(
    mapStateToPropsSnippet,
    mapDispatchToPropsSnippet
)(Listsnippet);

module.exports = ListSnippetX;
