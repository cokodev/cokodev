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
        return (
            <div>
                <img onClick={this.show.bind(this)}
                src="img/snippet.png"
                alt="image snippet"
                className="image"
                />
                <Modal containerClassName="formEF" closeOnOuterClick={true} show={this.state.show} onClose={this.close.bind(this)} transitionSpeed={1000}>
                    <h4 className="titleE1">{this.props.snippet.snippetName}</h4>
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
                        <option value="none">Plain text</option>
                        <option value="javascript">javascript</option>
                        <option value="css">css</option>
                        <option value="html">html</option>
                        <option value="cs">cs</option>
                        <option value="c++">c++</option>
                        <option value="php">php</option>
                        <option value="objectivec">objectivec</option>
                        <option value="python">python</option>
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
