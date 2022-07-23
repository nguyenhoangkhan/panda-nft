import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../assets/fake-data/fake-data";
import Button from "../Button";
import Card from "../Card";
import { Col, Row } from "../Layout";
import TitleContent from "../TitleContent";
import { Description, Offers, PriceHistory } from "./components";
const DetailPage = () => {
  const { name } = useParams();

  useEffect(() => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const buttons = $$(".detail-page-description-btns button");
    const sections = $$(".detail-page__wrapper  .detail-page__section");

    buttons.forEach((button, idx) => {
      const section = sections[idx];
      button.addEventListener("click", (e) => {
        $(".detail-page-description-btns button.active").classList.remove(
          "active"
        );
        $(
          ".detail-page__wrapper  .detail-page__section.active"
        ).classList.remove("active");
        const target = e.target;
        target.classList.add("active");
        section.classList.add("active");
      });
    });
  }, []);

  return (
    <div className="detail-page__wrapper">
      <Row>
        {products
          .filter((data) => data.name === name)
          .map((data) => (
            <React.Fragment key={data.id}>
              <Col col={6} md={6} smCol={12}>
                <Card banner={data.banner} noPadding cardHalf />
              </Col>
              <Col col={6} md={6} smCol={12}>
                <Row>
                  <Col col={12} mdCol={12} smCol={12}>
                    <TitleContent className="detail-page__title">
                      #1119 {data.title}
                    </TitleContent>
                  </Col>
                  <Col col={12} md={12} smCol={12}>
                    <p className="detail-item-text">
                      The Birdhouse is a collection of 6000 birds, each with
                      it's own unique traits & personality. See them all at
                      TheBirdHouse.app
                    </p>
                  </Col>
                  <Col col={12} md={12} smCol={12}>
                    <div className="detail-item-bid">
                      <div className="detail-item__price-bid">
                        <p>Price Bid</p>
                        <h3>{data.price}</h3>
                      </div>
                      <div className="detail-item__last-bid">
                        <p>Last Bid</p>
                        <h3>{data.lastPrice}</h3>
                      </div>
                    </div>
                  </Col>
                  <Col col={12} mdCol={12} smCol={12}>
                    <div className="detail-item-creator_owner">
                      <div className="detail-item-creator detail-item">
                        <div className="detail-item-creator__avatar detail-avatar">
                          <img src={data.avatarCreator} alt="avatar" />
                        </div>
                        <div className="detail-item-creator__info detail-item-info">
                          <p>Creator</p>
                          <h3>SalvadorDali</h3>
                        </div>
                      </div>
                      <div className="detail-item-owner detail-item">
                        <div className="detail-item-owner__avatar detail-avatar ">
                          <img src={data.avatarOwner} alt="avatar" />
                        </div>
                        <div className="detail-item-owner__info detail-item-info">
                          <p>Owner</p>
                          <h3>SalvadorDali</h3>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col col={12} md={12} smCol={12}>
                    <div className="detail-buy-btns">
                      <Button transparent>Purchase Now</Button>
                      <Button primary>Place A Bid</Button>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col col={12} mdCol={12} smCol={12}>
                <Row>
                  <Col col={12} mdCol={12} smCol={12}>
                    <div className="detail-page-description-btns">
                      <Row>
                        <Col col={4} mdCol={4} smCol={4}>
                          <Button className="active" noBorder transparent>
                            Description
                          </Button>
                        </Col>
                        <Col col={4} mdCol={4} smCol={4}>
                          <Button noBorder transparent>
                            Offers
                          </Button>
                        </Col>
                        <Col col={4} mdCol={4} smCol={4}>
                          <Button noBorder transparent>
                            Price History
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col col={12} md={12} smCol={12}>
                    <div className="detail-page-description-box">
                      <Description />
                      <Offers />
                      <PriceHistory />
                    </div>
                  </Col>
                </Row>
              </Col>
            </React.Fragment>
          ))}
      </Row>
    </div>
  );
};

export default DetailPage;
