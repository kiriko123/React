import PropTypes from "prop-types"
function UserGreeting(props) {
    const welcomeMessage = (
        <h2 className="welcome-message">Welcome {props.username}</h2>
    );
    const logginMessage = (
        <h2 className="loggin-message">Please log in to continue</h2>
    );
    return props.isLoggedIn ? welcomeMessage : logginMessage;
    // eslint-disable-next-line react/prop-types
    /*if(props.isLoggedIn){
          // eslint-disable-next-line react/prop-types
          return <h2>Welcome {props.username}</h2>
      }
      else{
          return <h2>Please log in to continue</h2>
      }*/
}
UserGreeting.PropTypes ={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
UserGreeting.defaultProps= {
    isLoggedIn: false,
    username: "khoi",
}
export default UserGreeting;
