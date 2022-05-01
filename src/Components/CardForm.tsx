import { MouseEvent, ChangeEvent, FC, useState } from 'react';
import { ICardFormProps } from '../Common/Interfaces/CardForm.interface';
import identityImage from '../Common/Assets/address-card-solid.svg';
import creditImage from '../Common/Assets/credit-card-solid.svg';
import formatExpDate from '../Helpers/formatExpDate';
import mastercardImage from '../Common/Assets/mastercard.png';
import visaImage from '../Common/Assets/visa-blue.png';
import angleDownImage from '../Common/Assets/angle-down-solid.svg';
import { clearCreditNumberString, clearExpDate, clearSecurityCode } from '../Helpers/clearFormFunctions';
import CardTypeModal from './CardTypeModal';

const CardForm: FC<ICardFormProps> = ({ setFormData, formData }) => {
  const [openSelectModal, setOpenSelectModal] = useState<Boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    if (name === 'cardNumber') {
      setFormData({ ...formData, [name]: clearCreditNumberString(value) });
      return;
    }

    if (name === 'expDateMonth' || name === 'expDateYear') {
      setFormData({ ...formData, [name]: clearExpDate(value) });
      return;
    }

    if (name === 'securityCode') {
      setFormData({ ...formData, [name]: clearSecurityCode(value) });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSelectTypeButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenSelectModal(true);
  };

  return (
    <div className="form-container">
      <form className="form" action="">
        <div className="form__input-container">
          <label className="form__input-label" htmlFor="">
            CARDHOLDER NAME
          </label>
          <div className="form__input-subcontainer">
            <i className="form__icon">
              <img className="form__icon-image" src={identityImage} alt="" />
            </i>
            <input
              className="form__input"
              type="text"
              name="cardholderName"
              onChange={handleInputChange}
              value={formData.cardholderName}
              placeholder="Jhon Doe"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="form__input-flex-container">
          <div className="form__input-container">
            <label className="form__input-label" htmlFor="">
              CARD NUMBER
            </label>
            <div className="form__input-subcontainer">
              <i className="form__icon">
                <img className="form__icon-image" src={creditImage} alt="" />
              </i>
              <input
                className="form__input form__input--number"
                type="string"
                name="cardNumber"
                onChange={handleInputChange}
                value={formData.cardNumber || ''}
                placeholder="123456789123"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form__input-container form__input-container--type">
            <label className="form__input-label" htmlFor="">
              TYPE
            </label>
            <div className="form__input-subcontainer">
              <button className="form__type-select-button" onClick={handleSelectTypeButtonClick}>
                {formData.cardType === 'mastercard' && (
                  <img className="form__select-button-image" src={mastercardImage} />
                )}
                {formData.cardType === 'visa' && <img className="form__select-button-image" src={visaImage} />}
                <img className="form__select-down-img" src={angleDownImage} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="form__input-flex-container">
          <div className="form__input-container">
            <label className="form__input-label" htmlFor="">
              EXP.DATE
            </label>
            <div className="form__input-subcontainer">
              <input
                className="form__input form__input--small"
                type="string"
                name="expDateMonth"
                onChange={handleInputChange}
                value={formatExpDate(formData.expDateMonth) || ''}
                placeholder="05"
              />
              <span>/</span>
              <input
                className="form__input form__input--small"
                type="string"
                name="expDateYear"
                onChange={handleInputChange}
                value={formatExpDate(formData.expDateYear) || ''}
                placeholder="01"
              />
            </div>
          </div>
          <div className="form__input-container form__input-container--security-code">
            <label className="form__input-label" htmlFor="">
              CVC
            </label>
            <div className="form__input-subcontainer">
              <input
                className="form__input form__input--small"
                type="string"
                name="securityCode"
                onChange={handleInputChange}
                value={formData.securityCode || ''}
                placeholder="123"
              />
            </div>
          </div>
        </div>
      </form>

      {openSelectModal && <CardTypeModal setFormData={setFormData} setOpenSelectModal={setOpenSelectModal} />}
    </div>
  );
};

export default CardForm;
