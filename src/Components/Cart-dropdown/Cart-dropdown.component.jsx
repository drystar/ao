import React from "react";

import CustomButton from "../Custom-button/Custom-button.component";

import "./Cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-item" />
    <CustomButton>Checkout</CustomButton>
  </div>
);

export default CartDropdown;
