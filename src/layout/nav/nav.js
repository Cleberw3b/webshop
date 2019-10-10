import Link from "next/link";
import HeartIcon from "../../../public/assets/icons/heart-icon";
import AccountIcon from "../../../public/assets/icons/account-icon";
import CartIcon from "../../../public/assets/icons/cart-icon";
import SearchIcon from "../../../public/assets/icons/search-icon";
import FacebookIcon from "../../../public/assets/icons/facebook-icon";
import InstagramIcon from "../../../public/assets/icons/instagram-icon";
import HamburguerMenu from "../../components/hamburguer-menu/hamburguer-menu";
import SearchButtonMobile from "../../components/search-mobile/search-mobile";
import isMobile from "../../../public/js/is-mobile";
import "./nav.scss";

const TopNav = ({ color }) => (
  <div className="top-contact-header">
    <span aria-label="Contact Email">contato@ozllo.com.br</span>
    <div className="contact-social-network-icon-box-header">
      <FacebookIcon height="18" width="18" color={color} />
      <InstagramIcon height="18" width="18" color={color} />
    </div>
  </div>
);

const Logo = () => (
  <Link href="/" passHref>
    <img src="/static/images/logo600x140.jpg" alt="logo" aria-label="Logo" />
  </Link>
);

const NavMenu = () => (
  <nav className="nav-menu" aria-label="Main menu" role="navigation">
    <ul>
      <li>
        <Link href="/#">
          <a>NOVIDADES</a>
        </Link>
      </li>
      <li>
        <Link href="/#">
          <a>SEMINOVOS</a>
        </Link>
      </li>
      <li>
        <Link href="/#">
          <a>OUTLET</a>
        </Link>
      </li>
      <li>
        <Link href="/#">
          <a>NACIONAL</a>
        </Link>
      </li>
      <li>
        <Link href="/#">
          <a>INTERNACIONAL</a>
        </Link>
      </li>
      <li>
        <Link href="/#">
          <a>QUERO VENDER</a>
        </Link>
      </li>
    </ul>
  </nav>
);

const Search = () => (
  <div className="nav-search" aria-label="Search">
    <input type="text" placeholder="O que você procura?" />
    <SearchIcon height="18" width="18" />
  </div>
);

const Wishlist = () => (
  <div className="nav-wishlist" aria-label="Whishlist">
    <HeartIcon height="18" width="18" outlined={true} />
    <span className="nav-wishlist-count">0</span>
  </div>
);

const Account = () => (
  <div className="nav-account" aria-label="My Account">
    <AccountIcon height="18" width="18" />
  </div>
);

const Cart = () => (
  <div className="nav-cart" aria-label="Cart">
    <CartIcon height="22" width="22" />
    <span className="nav-cart-count">0</span>
  </div>
);

const MobileMenu = () => (
  <div className="main-mobile-menu">
    <h1>MENU</h1>
    <NavMenu />
    <div className="main-mobile-menu-wishlist">
      <Wishlist />
      <span className="main-mobile-menu-wishlist-text">MEUS FAVORITOS</span>
    </div>
  </div>
);

const Desktop = () => (
  <div className="header-box">
    <TopNav />
    <div className="nav-box">
      <Logo />
      <NavMenu />
      <div className="nav-menu-right">
        <Search />
        <Wishlist />
        <Account />
        <Cart />
      </div>
    </div>
  </div>
);

const Mobile = () => (
  <div className="header-box">
    <TopNav color="white" />
    <div className="nav-box">
      <HamburguerMenu>
        <MobileMenu />
      </HamburguerMenu>
      <SearchButtonMobile />
      <Logo />
      <Account />
      <Cart />
    </div>
  </div>
);

const Nav = () => {
  if (isMobile()) return Mobile();
  return Desktop();
};

export default Nav;
