import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "../Custom-button/Custom-button.component";
import CartItem from "../Cart-item/Cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./Cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Checkout</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
