var React = require('react');
var connect = require('react-redux').connect;

class Listsnippetshared extends React.Component {
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
        //var Listsnippetshared = [];
        /*
        for (var i=0; i<this.props.folders.length; i++ ) {
            if (this.props.folderSelected == this.props.folders[i]._id) {
                //console.log("this.props.folderSelected", this.props.folderSelected);
                //console.log("this.props.folders[i]._id", this.props.folders[i]);
                for(var j=0; j<this.props.folders[i].snippets.length; j++ ) {
                    var className = null;
                    if (this.props.snippetSelected == this.props.folders[i].snippets[j]._id) {
                        console.log("this.props.folders[i].snippets[j]._id", this.props.folders[i].snippets[j]._id);
                        className = "folder-selected";
                    }
                    itemsSnippet.push(
                        <li key={j} onClick={this.handleClick.bind(this, this.props.folders[i].snippets[j]._id)} className="mui-row">
                            <div id="sn-snippet" className={className}>
                                <UpdateSnippetXForm onSubmit={this.submit} snippet={this.props.folders[i].snippets[j]}/>
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
                break;
            }
        }*/
        //console.log("itemsSnippet", itemsSnippet);
        return (
            <div>
                <div id="sn-snippet" className="mui-row">
                    <div>
                        <a href="#"><img src="images/snippet.png" alt="image snippet" className="image"/></a>
                    </div>
                    <h5>Name snippet</h5>
                    <p>Description</p>
                    <p><span id="snippettag">#tag</span><span id="folderonsnippet">name folder</span></p>
                </div>
            </div>
        )
    }
}

function mapStateToPropsSnippetShared(state) {
    //state du folder modifié avec les données du user loggé : usersdata
    return {};
}

function mapDispatchToPropsSnippetShared(dispatch) {
    return {
        getData: function(users) {
            dispatch({type: "users", users: users});
        }
    };
}

var ListsnippetsharedX = connect(
    mapStateToPropsSnippetShared,
    mapDispatchToPropsSnippetShared
)(Listsnippetshared);

module.exports = ListsnippetsharedX;