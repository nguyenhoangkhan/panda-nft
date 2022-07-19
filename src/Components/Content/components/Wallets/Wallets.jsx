import { Col, Row } from "../../../Layout";
const Wallets = () => {
  return (
    <div className="wallets-wrapper">
      <Row>
        <Col col="2-4" mdCol="4" smCol="6">
          <div className="wallet-item">
            <img src="binance.png" alt="" />
          </div>
        </Col>
        <Col col="2-4" mdCol="4" smCol="6">
          <div className="wallet-item">
            <img src="trust.png" alt="" />
          </div>
        </Col>
        <Col col="2-4" mdCol="4" smCol="6">
          <div className="wallet-item">
            <img src="meta.png" alt="" />
          </div>
        </Col>
        <Col col="2-4" mdCol="4" smCol="6">
          <div className="wallet-item">
            <img src="Coinbase New 2021 1.png" alt="" />
          </div>
        </Col>
        <Col col="2-4" mdCol="4" smCol="6">
          <div className="wallet-item">
            <img src="Tokocrypto 1.png" alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Wallets;
