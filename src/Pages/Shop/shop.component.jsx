import React from "react";

import CollectionPreview from "../../Components/Collection-preview/Collection-preview.component";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview key={id} {...otherCollectionsProps} />
    ))}
  </div>
);

export default ShopPage;
