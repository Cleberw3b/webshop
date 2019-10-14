import Link from "next/link";
import HeartIcon from "../../../public/assets/icons/heart-icon";
import SearchIcon from "../../../public/assets/icons/search-icon";
import TopNav from "../../components/header/top-nav/top-nav";
import HamburguerMenu from "../../components/header/hamburguer-menu/hamburguer-menu";
import SearchMobile from "../../components/header/search-mobile/search-mobile";
import AccountMenu from "../../components/header/account-menu/account-menu";
import CartMenu from "../../components/header/cart-menu/cart-menu";
import isMobile from "../../../public/js/isMobile";
import "./nav.scss";

const Logo = () => (
  <Link href="/" passHref>
    <img src="/static/images/logo600x140.jpg" alt="logo" aria-label="Logo" />
  </Link>
);

const MenuList = () => (
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
);

const Wishlist = () => (
  <div className="nav-wishlist" aria-label="Whishlist">
    <HeartIcon height="18" width="18" outlined={true} />
    <span className="nav-wishlist-count">0</span>
  </div>
);

const Account = () => (
  <div className="nav-account" aria-label="My Account">
    <AccountMenu />
  </div>
);

const Cart = () => (
  <div className="nav-cart" aria-label="Cart">
    <CartMenu />
  </div>
);

const MenuDesktop = () => (
  <nav className="nav-menu-desktop" aria-label="Main menu" role="navigation">
    <MenuList />
  </nav>
);

const MobileMenu = () => (
  <nav className="nav-menu-mobile" aria-label="Main menu" role="navigation">
    <HamburguerMenu>
      <h1>MENU</h1>
      <MenuList />
      <div className="mobile-menu-wishlist">
        <Wishlist />
        <span>MEUS FAVORITOS</span>
      </div>
    </HamburguerMenu>
  </nav>
);

const Desktop = () => (
  <div className="header-box">
    <TopNav />
    <div className="nav-box">
      <Logo />
      <MenuDesktop />
      <div className="nav-menu-right">
        <div className="nav-search" aria-label="Search">
          <input type="text" placeholder="O que você procura?" />
          <SearchIcon height="18" width="18" />
        </div>
        <Wishlist />
        <Account />
        <Cart />
      </div>
    </div>
  </div>
);

const Mobile = () => (
  <div className="header-box">
    <TopNav isMobile />
    <div className="nav-box">
      <MobileMenu />
      <SearchMobile />
      <Logo />
      <Account />
      <Cart />
    </div>
  </div>
);

import NavProvider from "./navProvider";
import { NavConsumer } from "../../layout/nav/navProvider";

const NavRender = () => {
  if (isMobile()) return Mobile();
  return Desktop();
};

const Nav = () => {
  return (
    <NavProvider>
      {NavRender()}
      <NavConsumer>
        {({ isAnyOpen }) => (
          <>
            {isAnyOpen() && (
              <style jsx global>{`
                .overlay {
                  height: 100%;
                }
              `}</style>
            )}
          </>
        )}
      </NavConsumer>
    </NavProvider>
  );
};

export default Nav;
