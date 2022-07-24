import { Col, Row } from "../../../Layout";
import TitleContent from "../../../TitleContent";
import Button from "../../../Button";
import Card from "../../../Card";
import { LiveAuctionsData } from "../../../../assets/fake-data/fake-data";
const Live = () => {
  return (
    <div className="live-wrapper">
      <div className="live-title-wrapper">
        <Row>
          <Col col={10} mdCol={8} smCol={12}>
            <TitleContent className="live-title content">
              Live Auctions
            </TitleContent>
          </Col>
          <Col col={2} mdCol={4} smCol={6}>
            <div classsName="live-btn-wrapper">
              <Button
                className="live-btn"
                to="view-more-live-auctions"
                transparent
              >
                View More
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="live-cards">
        <Row>
          {LiveAuctionsData.map((item) => (
            <Col key={item.id} col={4} mdCol={6} smCol={12}>
              <Card
                className="live-card"
                id={item.id}
                name={item.name}
                banner={item.banner}
                avatar={item.avatarCreator}
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
