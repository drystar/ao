import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./Pages /Homepage/homepage.component";

const AO = () => (
  <div>
    <h1>HELLO A0</h1>
  </div>
);

function App() {
  return (
    <div>
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/ao" component={AO} />
      </switch>
    </div>
  );
}

export default App;
