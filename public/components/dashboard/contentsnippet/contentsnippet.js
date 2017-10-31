var React = require("react");
var connect = require('react-redux').connect;
var ContentSnippetXForm = require("./content");

class ContentSnippet extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(values){
        this.props.handleChangeContent(values.contentsnippet, this.props.contentsnippet.id);
    };

    render() {
        const initialValue = {contentsnippet : this.props.contentsnippet.contentSnippet};
        return (
            <div >
                <div className="easy2">
                    <div className="mui--text-center mui--align-bottom">
                    <span id="p2Back">
                      <a href="#">
                        <i className="fa fa-ellipsis-h" aria-hidden="true" />
                      </a>
                    </span>
                    </div>
                    <p>Message</p>
                </div>
                <ContentSnippetXForm initialValues={initialValue} onSubmit={this.submit}/>
            </div>
        )
    }
}

function mapStateToPropsContentSnippet(state) {
    if (typeof(state.snippetSelected) != "undefined") {
        for (var i=0; i<state.snippet.length; i++ ) {
            if (state.snippetSelected == state.snippet[i].id) {
                return {contentsnippet: state.snippet[i]};
            }
        }
    } else {
        return {contentsnippet : null};
    }
}

function mapDispatchToPropsContentSnippet(dispatch) {
    return {
        handleChangeContent: function(contentSnippet, idsnippet) {
            dispatch({type: "contentSnippet", contentSnippet: contentSnippet, idsnippet: idsnippet});
        }
    }
}

var ContentSnippetX = connect(
    mapStateToPropsContentSnippet,
    mapDispatchToPropsContentSnippet
)(ContentSnippet);

module.exports = ContentSnippetX;