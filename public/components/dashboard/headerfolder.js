var React = require("react");
var AddFolderXForm = require("./addfolder");
var Deletefolder = require("./deletefolder");
var connect = require('react-redux').connect;

class Headerfolder extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(values){
        console.log("valuesSubmit",values);
        this.props.handleChange(values);
    };
    render() {
        return (
            <div id="header" className="mui-row">
                <AddFolderXForm onSubmit={this.submit}/>
                <Deletefolder/>
            </div>
        )
    }
}

function mapDispatchToPropsFolder(dispatch) {
    return {
        handleChange: function(folder) {
            dispatch({type: "addfolder", folder: folder});
        }
    }
}

var FolderX = connect(
    null,
    mapDispatchToPropsFolder
)(Headerfolder);

module.exports = FolderX;