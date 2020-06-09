import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import {
  selectIsCollectionsLoaded,
  selectIsCollectionFetching,
} from "../../redux/shop/shop.selectors";
import WithSpinner from "../../Components/With-spinner/With-spinner.component";
import CollectionPage from "./Collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsCollectionsLoaded(state),
});
