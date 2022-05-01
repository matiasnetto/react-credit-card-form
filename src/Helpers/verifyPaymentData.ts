import { ICreditCardData } from '../Common/Interfaces/CreditCard.interface';

const verifyPaymentData = (data: ICreditCardData) => {
  if (Object.values(data).some((el) => !el)) return { error: true, message: 'Necesitas completar todos los campos' };

  if (typeof data.cardNumber === 'number' && data.cardNumber.toString().length < 16)
    return { error: true, message: 'Numero de tarjeta invalido' };

  if (data.expDateYear && data.expDateMonth) {
    const today = new Date();
    const expDate = new Date(data.expDateYear + 2000, data.expDateMonth, today.getDate());

    if (expDate < today) return { error: true, message: 'La tarjeta se encuentra vencida' };
  }

  if (data.expDateMonth && data.expDateMonth > 12) return { error: true, message: 'Numero de mes invalido' };

  if (data.securityCode && data.securityCode?.length < 3)
    return { error: true, message: 'Numero de seguridad invalido' };

  return { error: false, message: '' };
};

export default verifyPaymentData;
