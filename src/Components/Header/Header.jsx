import images from "../../assets/images";
import { Col, Row } from "../Layout";
import Ornament from "../Ornament";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-wrapper">
      <Row>
        <Col col={3} mdCol={4} smCol={12}>
          <div className="header-logo">
            <img src={images.logo} alt="TikTok" />
            <p>Panda NFT</p>
          </div>
        </Col>
        <Col col={6} mdCol={4} smCol="0">
          <ul className="header-nav">
            <li className="active">
              <NavLink to="home">Home</NavLink>
            </li>
            <li>
              <NavLink to="discover">Discover</NavLink>
            </li>
            <li>
              <NavLink to="docs">Docs</NavLink>
            </li>
            <li>
              <NavLink to="blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact Us</NavLink>
            </li>
          </ul>
        </Col>
        <Col col={3} mdCol={4} smCol="0">
          <div className="header-connect">
            <a href="a">Connect Wallet</a>
          </div>
        </Col>
      </Row>
      <Ornament className="header-ornament" />
      <Ornament className="wallets-ornament" />
    </div>
  );
};

export default Header;
