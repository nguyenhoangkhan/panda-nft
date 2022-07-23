import React from "react";
import { Col, Row } from "../Layout";
import Images from "../../assets/images";
import Ornament from "../Ornament";
const Footer = () => {
  return (
    <div className="footer">
      <div className="grid wide">
        <Row>
          <Col col="4" smCol={12}>
            {" "}
            <div className="footer-panda">
              <div className="footer-panda__content">
                <div className="footer-panda__content-title">
                  <img src={Images.logo} alt="" />
                  <h2>Panda NFT</h2>
                </div>
                <div className="footer-panda__content-text">
                  <p>
                    The world’s first and largest digital marketplace for crypto
                    collectibles and non-fungible tokens (NFTs). Buy, sell, and
                    discover exclusive digital items.
                  </p>
                </div>
              </div>
              <div className="footer-panda__reserved">
                <p>2021 All Right Reserved</p>
              </div>
            </div>{" "}
          </Col>
          <Col col="2-5" mdCol={12} smCol={12}>
            {" "}
            <div className="footer-resource">
              <h1 className="footer-title">Resources</h1>
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Platform Status</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="">Gas-Free Marketplace</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>{" "}
          </Col>
          <Col col="2-5">
            {" "}
            <div className="footer-company">
              <h1 className="footer-title">Company</h1>
              <ul>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>{" "}
          </Col>
          <Col col="2-5">
            {" "}
            <div className="footer-contact">
              <h1 className="footer-title">Contact</h1>
              <ul>
                <li>
                  <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                </li>
                <li></li>
              </ul>
            </div>{" "}
          </Col>
        </Row>
      </div>
      <Ornament className="ornament-footer" />
    </div>
  );
};

export default React.memo(Footer);
