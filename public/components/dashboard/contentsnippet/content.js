var React = require("react");

var reduxForm = require('redux-form').reduxForm;
var Field = require('redux-form').Field;

import Button from "muicss/lib/react/button";

class Content extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log("this.props.initialValues.snippetContent", this.props.initialValues.snippetContent);
        return (
            <div className="easy1" >
                <div className="mui--text-center mui--align-bottom">
                    <span id="p1Next">
                      <a href="#">
                        <i className="fa fa-ellipsis-h" aria-hidden="true" />
                      </a>
                    </span>
                </div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        <Field name="snippetContent" component="textarea" id="textarea" placeholder="Ici votre snippet"/>
                        <Button type="submit" value="Save" id="submitContent" >Save</Button>
                    </label>
                </form>
            </div>
        )
    }
}

var ContentSnippetXForm = reduxForm({
    form: 'contentsnippet',
    enableReinitialize: true
})(Content);

module.exports = ContentSnippetXForm;