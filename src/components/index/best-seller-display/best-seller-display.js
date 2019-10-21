import ProductCard from "../../product-card/product-card";
import "./best-seller-display.scss";
import Caroulsel from "../../carousel/carousel";

const BestSeelerDisplay = () => (
  <section className="best-seller-display">
    <h3>MAIS VENDIDOS</h3>
    <Caroulsel>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Caroulsel>
  </section>
);

export default BestSeelerDisplay;
