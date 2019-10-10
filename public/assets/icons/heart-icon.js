import "./heart-icon.scss";

const HeartIcon = ({
  outlined,
  hoverable,
  transit,
  activeable,
  height,
  width
}) => (
  <svg
    height={height ? `${height}px` : "24px"}
    width={width ? `${width}px` : "24px"}
    className={
      "heart-icon" +
      `${outlined ? " is-outlined" : ""}` +
      `${hoverable ? " is-hoverable" : ""}` +
      `${transit ? " is-transit" : ""}` +
      `${activeable ? " is-activeable" : ""}`
    }
    viewBox="0 0 32 32"
  >
    <path
      d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454
C30,20.335,16,28.261,16,28.261z"
    />
  </svg>
);

export default HeartIcon;
