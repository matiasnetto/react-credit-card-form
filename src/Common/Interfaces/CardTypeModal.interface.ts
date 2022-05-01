import { Dispatch } from 'react';
import { ICreditCardData } from './CreditCard.interface';

export interface ICardTypeModalProps {
  setOpenSelectModal: Dispatch<React.SetStateAction<Boolean>>;
  setFormData: Dispatch<React.SetStateAction<ICreditCardData>>;
}
