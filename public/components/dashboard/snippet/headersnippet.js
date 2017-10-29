var React = require("react");
var AddSnippetXForm = require("./addsnippet");
var connect = require('react-redux').connect;

class Headersnippet extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(values){
        console.log("valuesSubmit",values);
        this.props.handleChange(values);
    };
    render() {
        return (
            <div id="header" className="mui-row">
                <AddSnippetXForm onSubmit={this.submit}/>
                <a href="#">
                    <i className="fa fa-trash-o" aria-hidden="true" />
                </a>
            </div>
        )
    }
}

function mapDispatchToPropsSnippet(dispatch) {
    return {
        handleChange: function(snippet) {
            dispatch({type: "addsnippet", snippet: snippet});
        }
    }
}

var SnippetX = connect(
    null,
    mapDispatchToPropsSnippet
)(Headersnippet);

module.exports = SnippetX;