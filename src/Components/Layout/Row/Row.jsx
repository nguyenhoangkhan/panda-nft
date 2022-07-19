import classNames from "classnames";
const Row = ({ noGutter, children }) => {
  const classes = classNames("row", { "no-gutter": noGutter });
  return <div className={classes}>{children}</div>;
};

export default Row;
