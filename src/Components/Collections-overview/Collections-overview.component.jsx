import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview key={id} {...otherCollectionsProps} />
    ))}
  </div>
);

export default CollectionsOverview;
