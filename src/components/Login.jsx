import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <label>login</label>
       <input type='text'></input>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({  
  })
  
  export default withRouter(connect(
    null,
    mapDispatchToProps
  )(Login));
  
