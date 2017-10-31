var React = require("react");

var reduxForm = require('redux-form').reduxForm;
var Field = require('redux-form').Field;

import Button from "muicss/lib/react/button";
import Modal, { closeStyle } from "simple-react-modal";


class Addfolder extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    show() {
        this.setState({ show: true });
        this.props.initialize({folderName : "", folderDescription: "" });
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
                    <h4 className="titleE1">Untitle folder</h4>
                    <a key="close" style={closeStyle} onClick={this.close.bind(this)}>
                        X
                    </a>
                    <form onSubmit={this.props.handleSubmit}>
                        <label>
                            <Field type="text" name="folderName" className="inputcenterTitleFolder" id="title" placeholder="Untitle folder" component="input"/>
                            <br/>
                            <Field type="text" name="folderDescription" className="inputcenterDesc" placeholder="Description" component="input"/>
                            <br/>
                            <Field type="text" name="folderStatus"  id="select" className="inputcenterStatus" placeholder="Status" component="select">
                            <option value="Plain text">Status</option>
                                <option value="shared">shared</option>
                                <option value="private">private</option>
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

var AddFolderXForm = reduxForm({
    form: 'addfolder'
})(Addfolder);


module.exports = AddFolderXForm;
