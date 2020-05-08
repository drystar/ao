import React from "react";

const CheckoutItem = ({
  cartItem: { name, imageURL, price, quantity },
} = (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" />
    </div>
    <span className="name"></span>
    <span className="quantity"></span>
    <span className="price"></span>
    <span className="remove-button"></span>
    <div className="remove-button">&#10005;</div>
  </div>
));

export default CheckoutItem;
