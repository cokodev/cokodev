var React = require("react");

var reduxForm = require('redux-form').reduxForm;
var Field = require('redux-form').Field;

import Button from "muicss/lib/react/button";
import Modal, { closeStyle } from "simple-react-modal";

class Addsnippet extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    show() {
        this.setState({ show: true });
        this.props.initialize({snippetName : "", snippetDescription: "", snippetTag:""});
    }
    close() {
        this.setState({ show: false });
    }
    render() {

        return (
            <div>
                <Button className="mui-btn mui-btn--small"
                        onClick={this.show.bind(this)}>+
                </Button>
                <Modal containerClassName="formEF" closeOnOuterClick={true} show={this.state.show} onClose={this.close.bind(this)} transitionSpeed={1}>

                    <h4 className="titleE2">New snippet ({this.props.fold})</h4>
                    <a key="close" style={closeStyle} onClick={this.close.bind(this)}>
                        X
                    </a>
                    <form className="mui--text-center formE2" onSubmit={this.props.handleSubmit}>
                        <label>
                            <Field type="text" name="snippetName" className="inputcenterTitleSnippet" placeholder="Untitle snippet" component="input"/>
                            <br/>
                            <Field type="text" name="snippetDescription" className="inputcenterDesc" placeholder="Description" component="input"/>
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

var AddSnippetXForm = reduxForm({
    form: 'addsnippet'
})(Addsnippet);

module.exports = AddSnippetXForm;
