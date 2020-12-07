import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "./../../redux/shop/shop.selectors";
import CollectionsContext from '../../contexts/Collections/collections.context'

import CollectionItem from "../../Components/Collection-item/Collection-item.component";

import "./Collection.styles.scss";

const CollectionPage = ({ match }) => {
  return (
    <CollectionsContext.Consumer>
    {
      collections => {
        const collection = collections[match.params.collectionId]
        const { title, items } = collection;
        return (     
           <div className="collection-page">
            <h2 className="title"> {title} </h2>
            <div className="items">
              {items.map((item) => (
                 <CollectionItem key={item.id} item={item} />
              ))}
             </div>
           </div>
          )
      }
    }
    </CollectionsContext.Consumer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

// selector requires part of state depeneding on the url parmeter

export default CollectionPage;
