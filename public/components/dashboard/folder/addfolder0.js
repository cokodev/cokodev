var React = require("react");
import { Fields, reduxForm } from "redux-form";
//var reduxForm = require('redux-form').reduxForm;
var Field = require('redux-form').Field;
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
//import Button from "muicss/lib/react/button";
import Modal, { closeStyle } from "simple-react-modal";


//Declaration des champs du formulaire
const renderFields = (fields) => (
  <div>
    <div className="input-row">
      <label>Folder Name</label><br/>
      <TextField {...fields.folderName.input} type="text"/>
      {fields.folderName.meta.touched && fields.folderName.meta.error &&
       <span className="error">{fields.folderName.meta.error}</span>}
    </div>
    <div className="input-row">
      <label>Folder Description</label><br/>
      <TextField {...fields.folderDescription.input} type="text"/>
      {fields.folderDescription.meta.touched && fields.folderDescription.meta.error &&
       <span className="error">{fields.folderDescription.meta.error}</span>}
    </div>
    <div className="input-row">
      <label>Folder Status</label><br/>
      <TextField {...fields.folderStatus.input} type="text"/>
      {fields.folderStatus.meta.touched && fields.folderStatus.meta.error &&
       <span className="error">{fields.folderStatus.meta.error}</span>}
    </div>
  </div>
)

//Validation du formulaire de login
const validate = values => {
  const errors = {};
    if (!values.folderName) {
      errors.folderName = "Required";
    }
    if (!values.folderDescription) {
      errors.folderDescription = "Required";
    }
    if (!values.folderStatus) {
      errors.folderStatus = "Required";
    }
    return errors;
}

class Addfolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    show() {
        this.setState({ show: true });
        this.props.initialize({folderName : "", folderDescription: "", folderStatus: "" });
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
                              <Fields names={["folderName", "folderDescription", "folderStatus"]} component={renderFields} />
                            <Button raised color="primary" type="submit" value="Save" id="submit" onClick={this.close.bind(this)}>Save</Button>
                        </label>
                    </form>
                </Modal>
            </div>
        );
    }
}

var AddFolderXForm = reduxForm({
    form: 'addfolder',
    validate
})(Addfolder);


module.exports = AddFolderXForm;
