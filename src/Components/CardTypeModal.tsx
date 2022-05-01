import { FC, MouseEvent } from 'react';
import { ICardTypeModalProps } from '../Common/Interfaces/CardTypeModal.interface';
import imageVisa from '../Common/Assets/visa-blue.png';
import imageMastercard from '../Common/Assets/mastercard.png';
import { TCardType } from '../Common/Interfaces/CreditCard.interface';

const CardTypeModal: FC<ICardTypeModalProps> = ({ setFormData, setOpenSelectModal }) => {
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    const type = e.currentTarget.name as TCardType;

    setFormData((data) => {
      return { ...data, cardType: type };
    });
    setOpenSelectModal(false);
  };

  return (
    <div className="type-modal-container">
      <div className="type-modal">
        <button name="visa" className="type-modal__item" onClick={handleButtonClick}>
          <img className="type-modal__image" src={imageVisa} alt="Visa" />
        </button>
        <button name="mastercard" className="type-modal__item" onClick={handleButtonClick}>
          <img className="type-modal__image" src={imageMastercard} alt="Mastercard" />
        </button>
      </div>
    </div>
  );
};

export default CardTypeModal;
