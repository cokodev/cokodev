var React = require("react");

var reduxForm = require('redux-form').reduxForm;
var Field = require('redux-form').Field;
import Button from "muicss/lib/react/button";

import Modal, { closeStyle } from "simple-react-modal";

class Updatesnippet extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    show() {
        this.setState({ show: true });
        this.props.initialize({
            snippetName : this.props.snippet.snippetName,
            snippetDescription: this.props.snippet.snippetDescription,
            snippetTag : this.props.snippet.snippetTag,
            languageType : this.props.snippet.languageType
             });

    };
    close() {
        this.setState({ show: false });
    };
    render() {
         console.log("snippetDescription dans update snippet : ", this.props.snippet.snippetDescription);
          console.log("snippetName dans update snippet : ", this.props.snippet.snippetName);
           console.log("snippetTag  dans update snippet : ", this.props.snippet.snippetTag);
        return (
            <div>
                <img onClick={this.show.bind(this)}
                src="img/snippet.png"
                alt="image snippet"
                className="image"
                />
                <Modal containerClassName="formEF" closeOnOuterClick={true} show={this.state.show} onClose={this.close.bind(this)} transitionSpeed={1000}>
                    <h4 className="titleE1">{}</h4>
                    <a key="close" style={closeStyle} onClick={this.close.bind(this)}>
                        X
                    </a>
                    <form onSubmit={this.props.handleSubmit}>
                        <label>
                        <Field type="text" name="snippetName" className="inputcenterTitleSnippet" placeholder="Untitle snippet" component="input"/>
                        <br/>
                        <Field type="text" name="snippetDescription" className="inputcenterDesc" placeholder="Description" component="input"/>
                        <br/>
                        <Field type="text" name="snippetTag" className="inputcenterTag" placeholder="#Tag" component="input"/>
                        <br/>
                        <Field name="languageType" id="select" className="inputcenterTypeL" component="select">
                            <option value="Plain text">Plain text</option>
                            <option value="JS">JS</option>
                            <option value="CSS">CSS</option>
                        </Field>
                        <br/>
                            <Button type="submit" value="Save" id="submit" onClick={this.close.bind(this)}>Save</Button>
                        </label>
                    </form>
                </Modal>
            </div>
        )
    }
}

var UpdateSnippetXForm = reduxForm({
    form: 'updatesnippet'
})(Updatesnippet);


module.exports = UpdateSnippetXForm;
