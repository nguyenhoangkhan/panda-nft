import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
const Button = ({
  primary,
  transparent,
  href,
  to,
  className,
  children,
  onClick,
  ...passProps
}) => {
  let Comp;
  const propsButton = {
    onClick,
    ...passProps,
  };
  const classes = classNames("button", {
    primary,
    transparent,
    [className]: className,
  });
  if (href) {
    Comp = "a";
  } else if ((propsButton.to = to)) {
    Comp = NavLink;
  } else {
    Comp = "button";
  }
  return (
    <Comp className={classes} {...propsButton}>
      {children}
    </Comp>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  transparent: PropTypes.bool,
  content: PropTypes.bool,
  href: PropTypes.string,
};

export default Button;
