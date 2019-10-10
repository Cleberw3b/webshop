// pages/_app.js
import "../../public/styles/theme.scss";
import React from "react";
import App from "next/app";
import Layout from "../layout/layout";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;