import React from "react";

// enable email/password & google authentication on firebase sign-in methods

import SignIn from "../../Components/Signin/SignIn.component";
import SignUp from "../../Components/SignUp/SignUp.component";

import "./Sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
