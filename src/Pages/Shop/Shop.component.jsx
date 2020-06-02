import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../Components/Collections-overview/Collections-overview.component";
import CollectionPage from "../Collection/Collection.component";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../Firebase/firebase.utils";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        console.log(collectionsMap);
      }
    );
  }

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
