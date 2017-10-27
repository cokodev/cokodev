var React = require("react");
//var connect = require('react-redux').connect;

class Deletefolder extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <a href="#">
                    <i id="trashF" className="fa fa-trash-o" aria-hidden="true" />
                </a>
            </div>
        )
    }
}

/*
function mapDispatchToPropsFolder(dispatch) {
    return {
        handleChange: function(folder) {
            dispatch({type: "addfolder", folder: folder});
        }
    }
}

var DeleteFolderX = connect(
    null,
    mapDispatchToPropsFolder
)(Deletefolder);
*/

module.exports = Deletefolder;