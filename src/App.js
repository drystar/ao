import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./Pages/Homepage/homepage.component";
import ShopPage from "./Pages/Shop/shop.component";
import Header from "./Components/Header/Header.component";

function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;
