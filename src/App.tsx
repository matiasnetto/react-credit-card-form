import { useState } from 'react';
import {} from 'react';
import './Common/styles/App.css';
import './Common/styles/CreditCard.css';
import './Common/styles/Form.css';
import './Common/styles/Modal.css';
import './Common/styles/Payment.css';
import './Common/styles/AlertMessage.css';

import { ICreditCardData, TCardType } from './Common/Interfaces/CreditCard.interface';
import CardForm from './Components/CardForm';
import CreditCard from './Components/CreditCard';
import verifyPaymentData from './Helpers/verifyPaymentData';
import { IAlertMessage } from './Common/Interfaces/AlertMessage.interface';
import { createPortal } from 'react-dom';
import AlertMessage from './Components/AlertMessage';

const formDefaultData: ICreditCardData = {
  cardNumber: null,
  cardType: 'mastercard',
  cardholderName: '',
  expDateYear: null,
  expDateMonth: null,
  securityCode: null,
};

function App() {
  const [formData, setFormData] = useState<ICreditCardData>(formDefaultData);
  const [message, setMessage] = useState<IAlertMessage | null>(null);

  const handlePayButtonClick = () => {
    const res = verifyPaymentData(formData);
    if (res.error) {
      setMessage({ type: 'error', message: res.message });
    } else {
      setMessage({ type: 'succes', message: 'Pago realizado!' });
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    }
  };

  return (
    <>
      <div className="App">
        <CreditCard
          cardNumber={formData.cardNumber}
          cardType={formData.cardType}
          cardholderName={formData.cardholderName}
          expDateMonth={formData.expDateMonth}
          expDateYear={formData.expDateYear}
          securityCode={formData.securityCode}
        />
        <div className="form-and-payment">
          <CardForm setFormData={setFormData} formData={formData} />
          <div className="payment-container">
            <div className="payment-block">
              <div>
                <p className="payment__title">Payment amount:</p>
                <p className="payment__amount">$110 USD</p>
              </div>
            </div>
            <div className="payment-block payment-block--button">
              <button className="payment__button" onClick={handlePayButtonClick}>
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>

      {message &&
        createPortal(
          <AlertMessage type={message.type} message={message.message} setMessage={setMessage} />,
          document.getElementById('alert-modal') as HTMLDivElement
        )}
    </>
  );
}

export default App;
