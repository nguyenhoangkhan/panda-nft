import { useParams } from "react-router-dom";
import { LiveAuctionsData } from "../../assets/fake-data/fake-data";
import Button from "../Button";
import Card from "../Card";
import { Col, Row } from "../Layout";
import TitleContent from "../TitleContent";
const DetailPage = () => {
  const { nameId } = useParams();
  return (
    <div className="detail-page__wrapper">
      <Row>
        {LiveAuctionsData.filter((data) => data.name === nameId).map((data) => (
          <>
            <Col col={6} md={6} smCol={12}>
              <Card banner={data.banner} noPadding cardHalf />
            </Col>
            <Col col={6} md={6} smCol={12}>
              <Row>
                <Col col={12}>
                  <TitleContent>#1119 {data.title}</TitleContent>
                </Col>
                <Col col={12}>
                  <p className="detail-item-text">
                    The Birdhouse is a collection of 6000 birds, each with it's
                    own unique traits & personality. See them all at
                    TheBirdHouse.app
                  </p>
                </Col>
                <Col col={12}>
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
                <Col col={12}>
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
                <Col col={12}>
                  <div className="detail-buy-btns">
                    <Button transparent>Purchase Now</Button>
                    <Button primary>Place A Bid</Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
};

export default DetailPage;
