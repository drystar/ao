import React from "react";
import { connect } from "react-redux";

import {
  selectCollection,
  selectCollections,
} from "./../../redux/shop/shop.selectors";

import CollectionItem from "../../Components/Collection-item/Collection-item.component";

import "./Collection.styles.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <h2> Collection Page </h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

// selector requires part of state depeneding on the url parmeter

export default connect(mapStateToProps)(CollectionPage);
