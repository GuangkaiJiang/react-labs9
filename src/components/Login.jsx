import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { userLogin } from '../redux/actions'
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        login : ""
    };
    this.onLoginChange=this.onLoginChange.bind(this);
  }

  onLoginChange(e)
  {
    this.setState({login:e.target.value});
  }

  matchLogin()
  {
    return fetch("http://localhost:3004/users")
      .then(data => data.json())
      .then(users =>{users.map(user=>{if(user.username==this.state.login){this.props.userLogin(user);this.props.history.push("/list")}})})
  }


  render() {
    return (
      <div>
       <label>login:</label>
       <input type='text' onChange={this.onLoginChange} value={this.state.login}></input>
       <br/>
       <button onClick={()=>this.matchLogin()}>login</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    userLogin: user => dispatch(userLogin(user))
    //prop           parameter    functionRedux   action             
  })
  
  export default withRouter(connect(
    null,
    mapDispatchToProps
  )(Login));
  
