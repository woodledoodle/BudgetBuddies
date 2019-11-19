import React, { Component, Fragment } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div>
          email:
          <input type="text" /> 
          password:<input type='text' />
        </div>
      </Fragment>
    );
  }
}
export default Login