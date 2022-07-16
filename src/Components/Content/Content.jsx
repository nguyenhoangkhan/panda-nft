import React from "react";
import PropTypes from "prop-types";
import Hero from "./components/Hero";

const Content = (props) => {
  return (
    <div className="content-wrapper">
      <Hero />
    </div>
  );
};

Content.propTypes = {};

export default Content;
