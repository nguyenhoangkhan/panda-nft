import { Col, Row } from "../../../Layout";
import TitleContent from "../../../TitleContent";
import Button from "../../../Button";
import Card from "../../../Card";
import { LiveAuctionsData } from "../../../../assets/fake-data/fake-data";
const Live = () => {
  return (
    <div className="live-wrapper">
      <Row>
        <Col col={10} mdCol={4} smCol={12}>
          <TitleContent className="live-title content">
            Live Auctions
          </TitleContent>
        </Col>
        <Col col={2} mdCol={4} smCol={6}>
          <Button className="live-btn" to="view-more-live-auctions" transparent>
            View More
          </Button>
        </Col>
      </Row>
      <div className="live-cards">
        <Row>
          {LiveAuctionsData.map((item) => (
            <Col key={item.id} col={4} mdCol={4} smCol={12}>
              <Card
                className="live-card"
                name={item.name}
                banner={item.banner}
                avatar={item.avatar}
                price={item.price}
                title={item.title}
                content
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default Live;
