import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./Directory.styles.scss";

import MenuItem from "../Menu-items/Menu-item.component";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapstateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapstateToProps)(Directory);
