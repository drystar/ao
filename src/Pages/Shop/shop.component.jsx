import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../Components/Collections-overview/Collections-overview.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
  </div>
);

export default ShopPage;
