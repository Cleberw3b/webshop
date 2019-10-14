import FacebookIcon from "../../../../public/assets/icons/facebook-icon";
import InstagramIcon from "../../../../public/assets/icons/instagram-icon";
import "./top-nav.scss";

const TopNav = ({ isMobile }) => (
  <div className="header-contact">
    <span aria-label="Contact Email">contato@ozllo.com.br</span>
    <div className="header-contact-social-network-box">
      <FacebookIcon height="18" width="18" color={isMobile && "white"} />
      <InstagramIcon height="18" width="18" color={isMobile && "white"} />
    </div>
  </div>
);

export default TopNav;
