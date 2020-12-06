import React from "react";

import { CustomButtonContainer } from "./Custom-button.styles";

import "./Custom-button.styles.scss";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
