import "./contact.scss";
import FacebookIcon from "../../../../public/assets/icons/facebook-icon";
import InstagramIcon from "../../../../public/assets/icons/instagram-icon";

const Contact = () => (
  <div className="contact">
    <div className="contact-us">
      <h3>FALE CONOSCO</h3>
      <span className="contact-us-phone-number">+55 11 3333-4444</span>
      <span className="contact-text">De seg. a sex das 8h às 18h</span>
    </div>
    <div className="contact-social-network">
      <h3>SIGA-NOS</h3>
      <div className="contact-social-network-icon-box">
        <FacebookIcon />
        <InstagramIcon />
      </div>
      <span className="contact-text">Postamos novidades todos os dias</span>
    </div>
  </div>
);

export default Contact;
