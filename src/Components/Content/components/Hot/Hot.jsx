import { Col, Row } from "../../../Layout";
import Button from "../../../Button";
import Card from "../../../Card/Card";
import TitleContent from "../../../TitleContent";
import { hotNftsData } from "../../../../assets/fake-data/fake-data";

const Hot = () => {
  return (
    <div className="hot-wrapper">
      <Row>
        <Col col={12}>
          <Row>
            <Col col={3}>
              <TitleContent className="content hot-title">
                HOT NFTs
              </TitleContent>
            </Col>
            <Col col={9}>
              <Row>
                <Col col={2}>
                  <Button className="hot-btn" to="music" transparent>
                    Music
                  </Button>
                </Col>
                <Col col={2}>
                  <Button className="hot-btn" to="art" transparent>
                    Art
                  </Button>
                </Col>
                <Col col={2}>
                  <Button className="hot-btn" to="sports" transparent>
                    Sports
                  </Button>
                </Col>
                <Col col={2}>
                  <Button className="hot-btn" to="virtual" transparent>
                    Virtual
                  </Button>
                </Col>
                <Col col={2}>
                  <Button className="hot-btn" to="videos" transparent>
                    Videos
                  </Button>
                </Col>
                <Col col={2}>
                  <Button className="hot-btn" to="more" transparent>
                    More
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col col={12}>
          <div className="hot-wrapper-cards">
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
          <div className="hot-wrapper-more">
            <Button transparent>View More</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Hot;
