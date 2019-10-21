import ShopNowButton from "../../shop-now-button/shop-now-button";
import AwesomeSlider from "react-awesome-slider";
import "./banner-carousel.scss";

const BannerCarousel = () => {
  return (
    <section className="banner-carousel">
      <AwesomeSlider fillParent bullets>
        <div className="banner-carousel-item">
          <img src="/static/images/bolsa-1.jpeg" />
          <ShopNowButton />
        </div>
        <div className="banner-carousel-item">
          <img src="/static/images/bolsa-2.jpg" />
          <ShopNowButton />
        </div>
        <div className="banner-carousel-item">
          <img src="/static/images/bolsa-3.jpg" />
          <ShopNowButton />
        </div>
      </AwesomeSlider>
    </section>
  );
};
export default BannerCarousel;
