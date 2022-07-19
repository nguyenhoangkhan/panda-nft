import React from "react";
import { Col, Row } from "../../../Layout";
import Button from "../../../Button";
import Card from "../../../Card/Card";
import TitleContent from "../../../TitleContent";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <Row>
        <Col col={6} mdCol={12} smCol={12}>
          <div className="hero-discover">
            <TitleContent>Discover a New Era of Crypto Currency</TitleContent>
            <p>
              Panda NFT is the primer marketplace for NFT, which are digital
              items you can truly own. Digital items have existed for a long
              time, but never like this.
            </p>
            <Button primary>Get Started</Button>
          </div>
        </Col>
        <Col col={6} mdCol={12} smCol={12}>
          <div className="hero-cards">
            <Card
              banner="IMG (3).png"
              price="4.89 eTH"
              title="Hamlet Contemplates"
              name="SalvadorDali"
              avatar="Background (2).png"
            />
            <Card cardHalf className="card-hero" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
