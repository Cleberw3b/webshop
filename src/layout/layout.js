import Header from "../components/header";
import dynamic from "next/dynamic";
const Nav = dynamic(() => import("./nav/nav"), {
  ssr: false
});
const Footer = dynamic(() => import("./footer/footer"), {
  ssr: false
});

const Layout = ({ children }) => (
  <>
    <Header />
    <Nav />
    {children}
    <Footer />
  </>
);

export default Layout;
