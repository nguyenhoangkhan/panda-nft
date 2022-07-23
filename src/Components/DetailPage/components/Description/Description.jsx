import { Col, Row } from "../../../Layout";

const Description = () => {
  return (
    <div className="description-wrapper detail-page__section active">
      <Row>
        <Col col={9} mdCol={9} smCol={12}>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </Col>
        <Col col={12} mdCol={12} smCol={12}>
          <div className="description-info-detail">
            <div className=" description-info-detail__box description-info-detail__address">
              <h4>Contract Address</h4>
              <p>0x49cf...a28b</p>
            </div>
            <div className=" description-info-detail__box description-info-detail__id">
              <h4>Token ID</h4>
              <p>4133</p>
            </div>
            <div className=" description-info-detail__box description-info-detail__token">
              <h4>Token Standard</h4>
              <p>ERC-721</p>
            </div>
            <div className=" description-info-detail__box description-info-detail__blockchain">
              <h4>Blockchain</h4>
              <p>Ethereum</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Description;
