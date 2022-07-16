import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
const Button = ({ primary, transparent, href, children }) => {
  let Comp;
  const classes = classNames("button", {
    primary,
    transparent,
  });
  if (href) {
    Comp = "a";
  } else {
    Comp = "button";
  }
  return <Comp className={classes}>{children}</Comp>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  transparent: PropTypes.bool,
  href: PropTypes.string,
};

export default Button;
