import PropTypes from "prop-types";
const Grid = (props) => {
  const col = props.col ? props.col : "";
  const mdCol = props.mdCol ? props.mdCol : "";
  const smCol = props.smCol ? props.smCol : "";
  return (
    <div className={`col l-${col} m-${mdCol} c-${smCol}`}>{props.children}</div>
  );
};
Grid.propTypes = {
  col: PropTypes.number.isRequired,
  mdCol: PropTypes.number,
  smCol: PropTypes.number,
};
export default Grid;
