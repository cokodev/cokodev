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
            <div>
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
