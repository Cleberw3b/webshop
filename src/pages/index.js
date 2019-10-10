// pages/index.js

import Header from "../components/header";
import Contact from "../components/index/contact/contact";
import Newsletter from "../components/index/newsletter/newsletter";

const title = "Ozllo";

const keywords = {
  name: "keywords",
  content:
    "moda, intermediação, produtos de luxo, produtos premium, bolsas, sapatos, botas"
};

const description = {
  name: "description",
  content: "Ozllo - Novos e Seminovos de Luxo"
};

const extra_meta = [keywords, description];

const Home = props => (
  <>
    <Header title={title} extra_meta={extra_meta} />
    <h1>{props.test}</h1>
    <Newsletter />
    <Contact />
  </>
);

Home.getInitialProps = async function() {
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  // const data = await res.json();
  // const produtos = GetProducts();
  // console.log(produtos);
  // return {
  //   produtos: produtos
  // };
  return { test: "Hi Ozllo" };
};

export default Home;
