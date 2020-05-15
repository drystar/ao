import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../Components/Collections-overview/Collections-overview.component";
import CategoryPage from "../Category/Category.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:catgeoryId`} component={CategoryPage} />
  </div>
);

export default ShopPage;
