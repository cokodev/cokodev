var React = require("react");
var AddFolderXForm = require("./addfolder");
var DeleteFolderX = require("./deletefolder");
var connect = require('react-redux').connect;
import { Redirect } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory();

class Headerfolder extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(values){
         var componentAddFolder = this;
        $.ajax({
          type: "POST",
          url: "/addfolder",
          // The key needs to match your method's input parameter (case-sensitive).
          data: values,
          success: function (data) {
             console.log("message de la BD: ",data);
            if (data.error != true) {
              //componentSignup.setState({ islog: true });
               console.log("componentAddFolder :",data);
              componentAddFolder.props.handleChange(data);

            }
          }
        });
    };

    render() {
        return (
            <div id="header" className="mui-row">
                <AddFolderXForm onSubmit={this.submit}/>
                <DeleteFolderX/>
            </div>
        )
    }
}

function mapDispatchToPropsFolder(dispatch) {
    return {
        handleChange: function(newFolder) {
            dispatch({type: "addfolder", folder: newFolder});
        }
    }
}

var FolderX = connect(
    null,
    mapDispatchToPropsFolder
)(Headerfolder);

module.exports = FolderX;
