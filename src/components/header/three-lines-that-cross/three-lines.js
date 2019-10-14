import "./three-lines.scss";

const ThreeLines = ({ showCloseButton }) => (
  <>
    <div className={"three-line-button" + `${showCloseButton ? " close" : ""}`}>
      <div className={"line-1"}></div>
      <div className={"line-2"}></div>
      <div className={"line-3"}></div>
    </div>
  </>
);

export default ThreeLines;
