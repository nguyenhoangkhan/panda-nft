import React from "react";
import { Col, Row } from "../../../Layout";
import Images from "../../../../assets/images";
import TitleContent from "../../../TitleContent";

const Create = () => {
  return (
    <div className="create-wrapper">
      <Row>
        <Col col={12} mdCol={12} smCol={12}>
          <TitleContent className="create-title content">
            Create and sell your NFTs
          </TitleContent>
        </Col>
      </Row>
      <Row>
        <Col col={4} mdCol={12} smCol={12}>
          <div className="create-card">
            <div className="create-card__icon">
              <img src={Images.createIcon} alt="" />
            </div>
            <h2 className="create-card__title">Set Up Your Wallet</h2>
            <p className="create-card__text">
              Once you’ve set up your wallet of choice, connect it to OpenSea by
              clicking the wallet icon in the top right corner.
            </p>
          </div>
        </Col>
        <Col col={4} mdCol={12} smCol={12}>
          <div className="create-card">
            <div className="create-card__icon">
              <img src={Images.createIcon} alt="" />
            </div>
            <h2 className="create-card__title">Add your NFTs</h2>
            <p className="create-card__text">
              Once you’ve set up your wallet of choice, connect it to OpenSea by
              clicking the wallet icon in the top right corner.
            </p>
          </div>
        </Col>
        <Col col={4} mdCol={12} smCol={12}>
          <div className="create-card">
            <div className="create-card__icon">
              <img src={Images.createIcon} alt="" />
            </div>
            <h2 className="create-card__title">List them for sale</h2>
            <p className="create-card__text">
              Once you’ve set up your wallet of choice, connect it to OpenSea by
              clicking the wallet icon in the top right corner.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Create;
