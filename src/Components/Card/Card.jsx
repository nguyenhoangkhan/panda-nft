import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "../Button";
import Images from "../../assets/images";
const Card = ({
  name,
  banner,
  avatar,
  price,
  title,
  cardHalf,
  content,
  className,
}) => {
  const classes = classNames("card-wrapper", {
    cardHalf,
    content,
    [className]: className,
  });
  return cardHalf ? (
    <div className={classes}>
      <div className="card-spotlight">
        <div className="card-spotlight__image half">
          <img src="IMG.png" alt="" />
          <div className="card-spotlight__countdown">
            <img src={Images.flameLogo} alt="" />
            <span>05 : 12 : 07 : 45</span>
          </div>
        </div>{" "}
      </div>
    </div>
  ) : (
    <div className={classes}>
      <div className="card-spotlight">
        <div className="card-spotlight__image">
          <img src={banner} alt="" />
          <div className="card-spotlight__countdown">
            <img src={Images.flameLogo} alt="" />
            <span>05 : 12 : 07 : 45</span>
          </div>
          <div className="card-over-lay">
            <div className="card-over-lay__button">
              <Button className="card-over-lay__btn" primary to="">
                Place A Bid
              </Button>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="card-content__title">
            <h3>{title}</h3>
            <Button primary className="card-content__btn">
              BSC
            </Button>
          </div>
          <div className="card-content__creator">
            <div className="card-content__left">
              <div className="card-content__avatar">
                <img src={avatar} alt="" />
              </div>
              <div className="card-content__creator-name">
                <p>Creator</p>
                <h4>{name}</h4>
              </div>
            </div>
            <div className="card-content__right">
              <div className="card-content__bid">
                <p>Current Bid</p>
                <h4>{price}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardHalf: PropTypes.bool,
};

export default Card;
