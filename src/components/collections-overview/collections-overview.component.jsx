import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collections-overview.styles.scss";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectShopCollections } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionOverview);