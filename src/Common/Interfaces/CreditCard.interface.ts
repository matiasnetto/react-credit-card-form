export type TCardType = 'visa' | 'mastercard';

export interface ICreditCardData {
  cardholderName: string;
  cardNumber: number | null;
  cardType: TCardType;
  expDateMonth: number | null;
  expDateYear: number | null;
  securityCode: string | null;
}
