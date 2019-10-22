import { useState, useEffect } from "react";
import LeftArrowIcon from "../../../public/assets/icons/left-arrow-icon";
import RightArrowIcon from "../../../public/assets/icons/right-arrow-icon";
import "./carousel.scss";

const Carousel = props => {
  const [current, setCurrent] = useState(0);
  const interval = props.interval ? props.interval : 3000;
  const size = React.Children.count(props.children);

  function increment() {
    const next = (current + 1) % size;
    setCurrent(next);
  }

  function decrement() {
    const prev = (current - 1 + size) % size;
    setCurrent(prev);
  }

  useEffect(() => {
    if (current + size / 2 > size) setCurrent(0);
    const next = (current + 1) % size;
    const id = setTimeout(() => setCurrent(next), interval);
    return () => clearTimeout(id);
  }, [current]);

  let dots = [];
  for (let index = 0; index < size; index++) {
    dots.push(<div key={index} className="carousel-dot"></div>);
  }

  let children_key = 0;

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-prev-button" onClick={decrement}>
          <LeftArrowIcon />
        </div>
        <div
          className="carousel-item-box"
          style={{
            transform: `translateX(${current * -335}px)`,
            transition: "transform .5s"
          }}
        >
          {props.children.map(child => (
            <div key={++children_key} className="carousel-item">
              {child}
            </div>
          ))}
        </div>

        <div className="carousel-next-button" onClick={increment}>
          <RightArrowIcon />
        </div>
      </div>
    </>
  );
};

export default Carousel;

{
  /* <div className="carousel-nav-box">{dots}</div> */
}
