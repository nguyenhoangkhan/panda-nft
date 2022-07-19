const TitleContent = (props) => {
  return (
    <h2 className={`title-content ${props.className ? props.className : ""}`}>
      {props.children}
    </h2>
  );
};

export default TitleContent;
