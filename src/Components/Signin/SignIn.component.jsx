import React from "react";

import "./SignIn.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I Already Have an Account</h2>
        <span>Sign in with Your Email & Password</span>

        <form>
          <input
            name="email"
            type="email"
            value={(this, state.email)}
            required
          />
          <label>Email</label>
          <input
            name="password"
            type="password"
            value={(this, state.password)}
            required
          />
          <label>Password</label>
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
