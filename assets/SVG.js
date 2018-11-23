import React, { Component } from "react";

import SVGName from "./SVGName";
import SVGFullLogo from "./SVGFullLogo";

const SVG = props => {
  switch (props.name) {
    case "SVGName":
      return <SVGName {...props} />;
    case "SVGFullLogo":
      return <SVGFullLogo {...props} />;
    default:
      return <div />;
  }
};
export default SVG;
