import React from "react";
import { Col, Row } from "../Layout";
import SearchIcon from "@mui/icons-material/Search";
import TitleContent from "../TitleContent";
import { hotNftsData } from "../../assets/fake-data/fake-data";
import Button from "../Button";
import Card from "../Card";
const Discover = () => {
  return (
    <div className="discover-wrapper">
      <div className="discover-search-wrapper ">
        <Row>
          <Col col={12}>
            <TitleContent>Explore Collectibles</TitleContent>
          </Col>
          <Col col={12}>
            <div className="discover-search">
              <input type="text" placeholder="Type your keywords . . ." />
              <span>
                {" "}
                <SearchIcon />{" "}
              </span>
            </div>
          </Col>
        </Row>
      </div>
      <div className="discover-cards-wrapper">
        <Row>
          <Col col={12}>
            <Row>
              <Col col={3}>
                <select>
                  <option>Sort By</option>
                  <option>A - Z</option>
                  <option>Price</option>
                  <option>Hot</option>
                </select>
              </Col>
              <Col col={9} smCol={12}>
                <Row>
                  <Col col={2}>
                    <Button className="discover-btn" to="music" transparent>
                      Music
                    </Button>
                  </Col>
                  <Col col={2}>
                    <Button className="discover-btn" to="art" transparent>
                      Art
                    </Button>
                  </Col>
                  <Col col={2}>
                    <Button className="discover-btn" to="sports" transparent>
                      Sports
                    </Button>
                  </Col>
                  <Col col={2}>
                    <Button className="discover-btn" to="virtual" transparent>
                      Virtual
                    </Button>
                  </Col>
                  <Col col={2}>
                    <Button className="discover-btn" to="videos" transparent>
                      Videos
                    </Button>
                  </Col>
                  <Col col={2}>
                    <Button className="discover-btn" to="more" transparent>
                      More
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col col={12}>
            <div className="discover-wrapper-cards">
              <Row>
                {hotNftsData.map((item) => (
                  <Col key={item.id} col={4} mdCol={4} smCol={12}>
                    <Card
                      name={item.name}
                      banner={item.banner}
                      avatar={item.avatar}
                      price={item.price}
                      title={item.title}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col col={12}>
            <div className="discover-wrapper-more">
              <Button transparent>View More</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Discover;
