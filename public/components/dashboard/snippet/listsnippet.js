var React = require('react');
var connect = require('react-redux').connect;

class Listfolder extends React.Component {
    constructor() {
        super();
        this.state = {snippet: ""};
    }
    render() {
        var itemsSnippet = [];
        for(var i=0; i<this.props.snippet.length; i++ ) {
            itemsSnippet.push(
                <li key={i} className="mui-row">
                    <div id="sn-snippet">
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
    console.log("state aaaaa", state.snippet);
    return {snippet: state.snippet};
}

var ListSnippetX = connect(
    mapStateToPropsSnippet,
    null
)(Listfolder);

module.exports = ListSnippetX;