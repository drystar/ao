import React from "react";

import Directory from "../../Components/Directory/Directory.component";

import "./Homepage.styles.scss";

import { HomePageContainer } from "./Homepage.styles";

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
