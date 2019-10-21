import "./left-arrow-icon.scss";

const LeftArrowIcon = ({ height, width }) => (
  <svg
    height={height ? `${height}px` : "24px"}
    width={width ? `${width}px` : "24px"}
    className="left-arrow-icon"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 24 24"
  >
    <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
  </svg>
);

export default LeftArrowIcon;
