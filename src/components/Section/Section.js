import React from "react";
import "./Section.css";
import PropTypes from "prop-types";

const Section = ({ title, children }) => (
  <section className="container-1">
    <h1 className="title">{title}</h1>
    {children}
  </section>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
