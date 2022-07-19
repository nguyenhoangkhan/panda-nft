import PropTypes from "prop-types";
const Col = (props) => {
  const col = props.col ? props.col : "";
  const mdCol = props.mdCol ? props.mdCol : "";
  const smCol = props.smCol ? props.smCol : "";
  return (
    <div
      className={`col l-${col} m-${mdCol} c-${smCol} ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};
Col.propTypes = {
  col: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mdCol: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  smCol: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default Col;
