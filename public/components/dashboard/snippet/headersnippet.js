var React = require("react");
var AddSnippetXForm = require("./addsnippet");

class Headersnippet extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(values){
        console.log("valuesSubmit",values);
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

module.exports = Headersnippet;