import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import ShopNowButton from "../../shop-now-button/shop-now-button";
import isMobileFunc from "../../../../public/js/isMobile";
import "./banner-carousel.scss";

const BannerCarousel = () => {
  const isMobile = isMobileFunc();
  return (
    <div className="banner-carousel">
      <Carousel interval={30000} controls={isMobile ? false : true} fade={true}>
        <CarouselItem>
          <img className="d-block w-100" src="/static/images/bolsa-1.jpeg" />
          <ShopNowButton />
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src="/static/images/bolsa-2.jpg" />
          <ShopNowButton />
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src="/static/images/bolsa-3.jpg" />
          <ShopNowButton />
        </CarouselItem>
      </Carousel>
    </div>
  );
};
export default BannerCarousel;
