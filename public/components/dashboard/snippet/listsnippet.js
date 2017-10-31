var React = require('react');
var connect = require('react-redux').connect;

class Listfolder extends React.Component {
    constructor() {
        super();
        this.state = {snippet: "", snippetSelected: null};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(id) {
        this.props.handleSelectedSnippet(id);
    };
    render() {
        var itemsSnippet = [];
        for(var i=0; i<this.props.snippet.length; i++ ) {
            var className = null;
            if (this.props.snippetSelected == this.props.snippet[i].id) {
                className = "folder-selected";
            }
            itemsSnippet.push(
                <li key={i} onClick={this.handleClick.bind(this, this.props.snippet[i].id)} className="mui-row">
                    <div id="sn-snippet" className={className}>
                        <a href="#">
                            <img
                                src="img/snippet.png"
                                alt="image snippet"
                                className="image"
                            />
                        </a>
                        <h5>{this.props.snippet[i].snippetName}</h5>
                        <p>{this.props.snippet[i].snippetDescription}</p>
                        <p>
                            <span id="snippettag">{this.props.snippet[i].snippetTag}</span>
                            <span id="folderonsnippet">name folder</span>
                        </p>
                    </div>
                </li>
            );
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
    return {snippet: state.snippet, snippetSelected: state.snippetSelected};
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