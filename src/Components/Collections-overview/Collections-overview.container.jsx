import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectisCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../With-spinner/With-spinner.component";
import CollectionsOverview from "./Collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = connect(mapStateToProps)(
  WithSpinner(CollectionsOverview)
);

// HOC - Functions will evaulate from the inside out
