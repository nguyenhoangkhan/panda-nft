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
              className="hero-card"
              banner="https://firebasestorage.googleapis.com/v0/b/panda-nft-1b3a8.appspot.com/o/IMG%20(3).png?alt=media&token=a3862353-972a-48ae-b975-bf32bf6f55e1"
              price="4.89 eTH"
              title="Hamlet Contemplates"
              name="SalvadorDali"
              avatar="https://firebasestorage.googleapis.com/v0/b/panda-nft-1b3a8.appspot.com/o/Background%20(2).png?alt=media&token=1e2eb788-8e8a-44c9-b01d-373b5d0c9b19"
            />
            <Card
              banner="https://firebasestorage.googleapis.com/v0/b/panda-nft-1b3a8.appspot.com/o/Image%20(2).png?alt=media&token=b2e8a94a-5178-4a9b-a6f5-de6ead87e665"
              cardHalf
              className="card-hero"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
