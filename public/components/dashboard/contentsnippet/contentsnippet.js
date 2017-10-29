var React = require("react");
//var connect = require('react-redux').connect;

class ContentSnippet extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div >
                <div className="easy2">
                    <div className="mui--text-center mui--align-bottom">
                    <span id="p2Back">
                      <a href="#">
                        <i className="fa fa-ellipsis-h" aria-hidden="true" />
                      </a>
                    </span>
                    </div>
                    <p>Message</p>
                </div>
                <div className="easy1">
                    <div className="mui--text-center mui--align-bottom">
                    <span id="p1Next">
                      <a href="#">
                        <i className="fa fa-ellipsis-h" aria-hidden="true" />
                      </a>
                    </span>
                    </div>
                    <p>Content</p>
                </div>
            </div>
        )
    }
}

module.exports = ContentSnippet;