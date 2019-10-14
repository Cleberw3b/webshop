import Link from "next/link";
import isMobile from "../../../public/js/isMobile";
import PaymentMethods from "../../components/payment-methods/payment-methods";
import "./footer.scss";

const AboutUs = () => (
  <div className="footer-about-us">
    <h4>SOBRE NÓS</h4>
    <ul>
      <li>A Nossa História</li>
      <li>Blog</li>
      <li>OZLLO</li>
      <li>Depoimentos</li>
      <li>Trabalhe conosco</li>
    </ul>
  </div>
);

const Help = () => (
  <div className="footer-help">
    <h4>AJUDA</h4>
    <ul>
      <li>Ajuda & Contato</li>
      <li>Pedidos & Entregas</li>
      <li>Como Comprar</li>
      <li>Trocas</li>
    </ul>
  </div>
);

const Authenticity = () => (
  <div className="footer-authenticity">
    <h4>AUTENTICIDADE</h4>
    <ul>
      <li>OZLLO CORP</li>
    </ul>
  </div>
);

const Payment = () => (
  <div className="footer-payment">
    <h4>FORMAS DE PAGAMENTO</h4>
    <PaymentMethods />
  </div>
);

const BuyNow = () => (
  <div className="footer-buy-now">
    <h4>COMPRE POR TELEFONE</h4>
    <ul>
      <li>(11) 9 7179-7124</li>
    </ul>
  </div>
);

const Copyrights = () => (
  <div className="footer-copyright">
    © Ozllo 2019, todos os direitos reservados!
  </div>
);

const Mobile = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-content-links">
        <AboutUs />
        <Help />
      </div>
      <div className="footer-content-extra">
        <Authenticity />
        <BuyNow />
      </div>
      <Payment />
      <Copyrights />
    </div>
  </footer>
);

const Desktop = () => (
  <footer className="footer">
    <div className="footer-content">
      <AboutUs />
      <Help />
      <Authenticity />
      <BuyNow />
      <Payment />
    </div>
    <Copyrights />
  </footer>
);

const FooterContent = () => {
  if (isMobile()) return Mobile();
  return Desktop();
};

export default FooterContent;
