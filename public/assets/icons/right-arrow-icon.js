import "./right-arrow-icon.scss";

const RightArrowIcon = ({ height, width }) => (
  <svg
    height={height ? `${height}px` : "24px"}
    width={width ? `${width}px` : "24px"}
    className="right-arrow-icon"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 24 24"
  >
    <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
  </svg>
);

export default RightArrowIcon;
