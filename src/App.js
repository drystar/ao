import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./Pages/Homepage/homepage.component";
import ShopPage from "./Pages/Shop/shop.component";
import Header from "./Components/Header/Header.component";
import SignInAndSignUp from "./Pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </switch>
    </div>
  );
}

export default App;
