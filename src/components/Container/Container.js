import React from "react";
import "./Container.css";
import PropTypes from "prop-types";

const Container = ({ children }) => <div className="Container">{children}</div>;

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
