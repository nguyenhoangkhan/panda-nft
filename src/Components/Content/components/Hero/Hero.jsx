import React from "react";
import Grid from "../../../Grid";
import Button from "../../../Button";
import Card from "../../../Card/Card";

const Hero = () => {
  return (
    <div className="row">
      <Grid col={12} mdCol={12} smCol={12}>
        <div className="hero-wrapper">
          <div className="hero-discover">
            <h1>Discover a New Era of Crypto Currency</h1>
            <p>
              Panda NFT is the primier marketplace for NFT, which are digital
              items you can truly own. Digital items have existed for a long
              time, but never like this.
            </p>
            <Button primary>Get Started</Button>
          </div>
          <div className="hero-cards">
            <Card />
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Hero;
