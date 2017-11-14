var React = require('react');
var connect = require('react-redux').connect;
var ProfileXForm = require('./profileForm');

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(values){
        console.log("values in pofile ajax : ", values)

        $.ajax({
          type: "POST",
          url: "/profile",
          data:  {userName:values.userName,
                     lastName:values.lastName,
                    firstName:values.firstName,
                    email:values.email,
                    password:values.password
             },
          success: function () {
                $("#err").html( "<p>Vos modifications ont bien été enregistrées</p>" );;
        }
        });
    }
    render() {
    var initialValue = {userName : this.props.user.userName,lastName: this.props.user.lastName,
        firstName : this.props.user.firstName, email: this.props.user.email, password: this.props.password };
        return (
        <div>
        <div>
        <br/>
        <center>
        <img src="img-userprofile.png" className="image_user" />
       <div id='err' color="white"></div>
        </center>
       </div>

            <ProfileXForm initialValues={initialValue} onSubmit={this.submit} user={this.props.user}/>
          </div>

          )
    }
}
function mapStateToProps(state) {
   console.log("affichage user profile", state.usersdata);
    return {user: state.usersdata};
}

function mapDispatchToProps(dispatch) {
    return {
        handleChange: function(user) {
            dispatch({type: "updateuser", user:user});
        }
    }
}

var UserProfileX = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);

module.exports = UserProfileX;
