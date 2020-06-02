import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../Components/Collections-overview/Collections-overview.component";
import CollectionPage from "../Collection/Collection.component";

class ShopPage extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default ShopPage;
