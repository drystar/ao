import React from "react";
import { connect } from "react-redux";

import CustomButton from "../Custom-button/Custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./Collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl, addItem }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted>Add to Cart</CustomButton>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
