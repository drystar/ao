import React from "react";
import { Connect } from "react-redux";

import "./directory.styles.scss";

import MenuItem from "../Menu-items/menu-item.component";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

export default Directory;
