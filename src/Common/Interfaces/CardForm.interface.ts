import { ICreditCardData, TCardType } from './CreditCard.interface';

export interface ICardFormProps {
  setFormData: React.Dispatch<React.SetStateAction<ICreditCardData>>;
  formData: ICreditCardData;
}
