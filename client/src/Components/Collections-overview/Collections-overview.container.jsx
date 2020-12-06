import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../With-spinner/With-spinner.component";
import CollectionsOverview from "./Collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

// const CollectionsOverviewContainer = connect(mapStateToProps)(
//   WithSpinner(CollectionsOverview)
// );
// HOC - Functions will evaulate from the inside out

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

// compose evaulates from right to left | essentially carries all the functions together

export default CollectionsOverviewContainer;
