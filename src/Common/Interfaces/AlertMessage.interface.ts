import { Dispatch } from 'react';

export interface IAlertMessage {
  type: 'error' | 'succes';
  message: string;
}

export interface IAlertMessageProps extends IAlertMessage {
  setMessage: Dispatch<React.SetStateAction<IAlertMessage | null>>;
}
