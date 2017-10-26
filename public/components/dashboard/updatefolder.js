var React = require("react");

var reduxForm = require('redux-form').reduxForm;
var Field = require('redux-form').Field;
import Button from "muicss/lib/react/button";

import Modal, { closeStyle } from "simple-react-modal";

class Updatefolder extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    show() {
        this.setState({ show: true });
        this.props.initialize({titleFolder : this.props.folder.titleFolder, DescriptionFolder: this.props.folder.DescriptionFolder, id: this.props.folder.id });
    };
    close() {
        this.setState({ show: false });
    };
    render() {
        return (
            <div>
                <img onClick={this.show.bind(this)}
                    src="img/folder.png"
                    alt="image folder"
                    className="image"
                />
                <Modal containerClassName="formEF" closeOnOuterClick={true} show={this.state.show} onClose={this.close.bind(this)} transitionSpeed={1000}>
                    <h4 className="titleE1">{this.props.folder.titleFolder}</h4>
                    <a key="close" style={closeStyle} onClick={this.close.bind(this)}>
                        X
                    </a>
                    <form onSubmit={this.props.handleSubmit}>
                        <label>
                            <Field type="text" name="titleFolder" className="inputcenterTitleFolder" id="title" placeholder="Title" component="input"/>
                            <br/>
                            <Field type="text" name="DescriptionFolder" className="inputcenterDesc" placeholder="Description" component="input"/>
                            <br/>
                            <Field type="hidden" name="id" placeholder="id" component="input"/>
                            <br/>
                            <Button type="submit" value="Save" id="submit" onClick={this.close.bind(this)}>Save</Button>
                        </label>
                    </form>
                </Modal>
            </div>
        )
    }
}

var UpdateFolderXForm = reduxForm({
    form: 'updatefolder'
})(Updatefolder);


module.exports = UpdateFolderXForm;