import LeftArrowIcon from "../../../../public/assets/icons/left-arrow-icon";
import RightArrowIcon from "../../../../public/assets/icons/right-arrow-icon";
import InstagramIcon from "../../../../public/assets/icons/instagram-icon";
import isMobileFunc from "../../../../public/js/isMobile";
import Carousel from "@brainhubeu/react-carousel";
import "./instagram-display.scss";

const Mobile = () => (
  <div className="instagram-display-image-box">
    <img src="/static/images/product-sample-img.png" />
    <img src="/static/images/product-sample-img.png" />
    <img src="/static/images/product-sample-img.png" />
    <img src="/static/images/product-sample-img.png" />
  </div>
);

const Desktop = () => (
  <Carousel
    arrowLeft={<LeftArrowIcon name="left-arrow" />}
    arrowRight={<RightArrowIcon name="right-arrow" />}
    addArrowClickHandler
    slidesPerPage={5}
    animationSpeed={1000}
    autoPlay={3000}
    offset={10}
    keepDirectionWhenDragging
    stopAutoPlayOnHover
    infinite
  >
    <img src="/static/images/product-sample-img.png" />
    <img src="/static/images/product-sample-img.png" />
    <img src="/static/images/product-sample-img.png" />
    <img src="/static/images/product-sample-img.png" />
    <img src="/static/images/product-sample-img.png" />
  </Carousel>
);

const InstagramDisplay = () => {
  const isMobile = isMobileFunc();
  return (
    <section className="instagram-display-box">
      <div className="instagram-display-title">
        <InstagramIcon />
        <h3>SIGA-NOS NO @ozllo_</h3>
      </div>
      {isMobile ? Mobile() : Desktop()}
    </section>
  );
};

export default InstagramDisplay;
