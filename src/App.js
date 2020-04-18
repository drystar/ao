import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./Pages/Homepage/homepage.component";
import ShopPage from "./Pages/Shop/shop.component";
import Header from "./Components/Header/Header.component";
import SignInAndSignUp from "./Pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component";
import { auth } from "./Firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </switch>
      </div>
    );
  }
}

export default App;
