import React from "react";
import PropTypes from "prop-types";
import Hero from "./components/Hero";
import Wallets from "./components/Wallets/";
import Create from "./components/Create";
import Live from "./components/Live";
import Feature from "./components/Feature";
import Hot from "./components/Hot/Hot";
import Own from "./components/Own";
const Content = () => {
  return (
    <div className="content-wrapper">
      <Hero />
      <Wallets />
      <Create />
      <Live />
      <Feature />
      <Hot />
      <Own />
    </div>
  );
};

Content.propTypes = {
  Hero: PropTypes.object,
  Wallets: PropTypes.object,
};

export default Content;
