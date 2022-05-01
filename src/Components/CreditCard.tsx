import { FC } from 'react';
import { ICreditCardData } from '../Common/Interfaces/CreditCard.interface';
import Tilt from 'react-parallax-tilt';
import mastercardLogoImage from '../Common/Assets/mastercard.png';
import visaLogoImage from '../Common/Assets/visa.png';
import chipImage from '../Common/Assets/chip.png';
import formatCardNumber from '../Helpers/formatCardNumber';
import formatExpDate from '../Helpers/formatExpDate';
import imageFinger from '../Common/Assets/finger.svg';

const CreditCard: FC<ICreditCardData> = (props) => {
  const { cardNumber, cardType, cardholderName, expDateMonth, expDateYear, securityCode } = props;

  return (
    <div className="credit-card-main-container">
      <Tilt className="tilt-container" tiltReverse={true} glareEnable={true} perspective={700}>
        <div className="credit-card">
          {cardType === 'mastercard' && <div className="mastercard-card" />}
          {cardType === 'visa' && <div className="visa-card" />}

          <div className="credit-card__row credit-card__row--type">
            {cardType === 'mastercard' && (
              <img className="credit-card__type-image" src={mastercardLogoImage} alt="mastercard image" />
            )}
            {cardType === 'visa' && <img className="credit-card__type-image" src={visaLogoImage} alt="visa image" />}
          </div>

          <div className="credit-card__row">
            <img className="credit-card__chip-image" src={chipImage} alt="chip" />
          </div>

          <div className="credit-card__row">
            <p className="credit-card__card-number">{formatCardNumber(cardNumber)}</p>
          </div>

          <div className="credit-card__row credit-card__row--name">
            <p className="credit-card__name">{cardholderName}</p>
            <p className="credit-card__exp-date">
              {formatExpDate(expDateMonth)}/{formatExpDate(expDateYear)}
            </p>
          </div>
        </div>

        {/* HOVER ME MESSAGE */}
        <div className="hover-message">
          <p className="hover-message__text">TOUCH ME</p>
          <img className="hover-message__img" src={imageFinger} alt="" />
        </div>
      </Tilt>
    </div>
  );
};

export default CreditCard;
