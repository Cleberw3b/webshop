import "./product-card.scss";
import HeartIcon from "../../../public/assets/icons/heart-icon";

const ProductCard = () => (
  <div className="product-card">
    <div className="product-card-container">
      <div className="product-card-top">
        <img src="/static/images/product-sample-img.png" />
        <div className="product-card-heart">
          <HeartIcon outlinedThin hoverable activeable width="30" height="30" />
        </div>
        <div className="product-card-offer">50% OFF</div>
        <div className="product-card-size-box">
          <span className="active">PP</span>
          <span>P</span>
          <span className="inactive">M</span>
          <span>G</span>
          <span>GG</span>
        </div>
      </div>
      <div className="product-card-add-to-cart-button">
        ADICIONAR AO CARRINHO
      </div>
      <h4>Nome do Produto</h4>
      <div className="product-card-price-box">
        <div className="product-card-price">
          <span>DE R$ 200,00</span>
          <span>POR R$ 100,00</span>
        </div>
        <span className="product-card-parcela">4x de R$ 25,00</span>
      </div>
    </div>
  </div>
);

export default ProductCard;
