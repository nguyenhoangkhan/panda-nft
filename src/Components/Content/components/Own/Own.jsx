import React from "react";
import Button from "../../../Button";
import { Col, Row } from "../../../Layout";
import TitleContent from "../../../TitleContent";
import Ornament from "../../../Ornament";
const Own = () => {
  return (
    <div className="own-wrapper">
      <Row>
        <Col col={12} mdCol={12} smCol={12}>
          <TitleContent>Create Your Own NFT!</TitleContent>
        </Col>
        <Col col={12} mdCol={12} smCol={12}>
          <p>
            We have a large scale group to support each other in this game, Join
            us to get the news as soon as possible and follow our latest
            announcements!
          </p>
        </Col>
        <Col col={12} mdCol={12} smCol={12}>
          <Button className="own-btn" primary>
            Join Community Now
          </Button>
        </Col>
      </Row>
      <Ornament className="own-ornament" />
    </div>
  );
};

export default Own;
