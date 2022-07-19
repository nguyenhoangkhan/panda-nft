import React from "react";
import Button from "../../../Button";
import { Col, Row } from "../../../Layout";
import TitleContent from "../../../TitleContent";
import Images from "../../../../assets/images";
import Ornament from "../../../Ornament";

const Feature = () => {
  return (
    <div className="feature-wrapper">
      <Row>
        <Col col={12} mdCol={12} smCol={12}>
          <Row>
            <Col col={10} mdCol={12} smCol={12}>
              <div className="feature-title__wrapper">
                <TitleContent className="feature-title content">
                  Featured Artist
                </TitleContent>
              </div>
            </Col>
            <Col col={2} mdCol={12} smCol={6}>
              <Button
                className="feature-btn"
                to="view-more-featured-artist"
                transparent
              >
                View More
              </Button>
            </Col>
          </Row>
        </Col>
        <Col col={12} mdCol={12} smCol={12}>
          <div className="feature-profile__wrapper">
            <Row>
              <Col col={3} mdCol={3} smCol={12}>
                <div className="feature-profile">
                  <div className="feature-profile__cover-image">
                    <img src="cryptopunks.png" alt="profile" />
                    <div className="feature-profile__avatar-image">
                      <img src="Image Placeholder.png" alt="profile" />
                    </div>
                  </div>
                  <h2 className="feature-profile__name">CryptoPunks</h2>
                  <p className="feature-profile__asset">
                    <img src={Images.ETH} alt="" />
                    <span>818.7K</span>
                  </p>
                </div>
              </Col>
              <Col col={3} mdCol={3} smCol={12}>
                <div className="feature-profile">
                  <div className="feature-profile__cover-image">
                    <img src="Image Placeholder (1).png" alt="profile" />
                    <div className="feature-profile__avatar-image">
                      <img src="Image Placeholder (4).png" alt="profile" />
                    </div>
                  </div>
                  <h2 className="feature-profile__name">CryptoPunks</h2>
                  <p className="feature-profile__asset">
                    <img src={Images.ETH} alt="" />
                    <span>818.7K</span>
                  </p>
                </div>
              </Col>
              <Col col={3} mdCol={3} smCol={12}>
                <div className="feature-profile">
                  <div className="feature-profile__cover-image">
                    <img src="Image Placeholder (2).png" alt="profile" />
                    <div className="feature-profile__avatar-image">
                      <img src="Image Placeholder (5).png" alt="profile" />
                    </div>
                  </div>
                  <h2 className="feature-profile__name">CryptoPunks</h2>
                  <p className="feature-profile__asset">
                    <img src={Images.ETH} alt="" />
                    <span>818.7K</span>
                  </p>
                </div>
              </Col>
              <Col col={3} mdCol={3} smCol={12}>
                <div className="feature-profile">
                  <div className="feature-profile__cover-image">
                    <img src="Image Placeholder (3).png" alt="profile" />
                    <div className="feature-profile__avatar-image">
                      <img src="Image Placeholder (6).png" alt="profile" />
                    </div>
                  </div>
                  <h2 className="feature-profile__name">CryptoPunks</h2>
                  <p className="feature-profile__asset">
                    <img src={Images.ETH} alt="" />
                    <span>818.7K</span>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Ornament className="feature-ornament" />
    </div>
  );
};

export default Feature;
