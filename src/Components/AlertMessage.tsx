import { FC, useEffect } from 'react';
import { IAlertMessageProps } from '../Common/Interfaces/AlertMessage.interface';
import imageError from '../Common/Assets/circle-xmark-solid.svg';
import imageSucces from '../Common/Assets/circle-check-solid.svg';

const AlertMessage: FC<IAlertMessageProps> = ({ type, message, setMessage }) => {
  useEffect(() => {
    setTimeout(() => {
      setMessage(null);
    }, 4000);
  }, []);

  return (
    <div className="alert-message">
      <i className="alert-message__icon">
        <img src={type === 'error' ? imageError : imageSucces} alt="" className="alert-message__img" />
      </i>
      <p className="alert-message__text">{message}</p>
    </div>
  );
};

export default AlertMessage;
