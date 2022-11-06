import { ValidationMessagePropsType } from 'data/types';

export const ValidationMessage = ({ message }: ValidationMessagePropsType) => (
  <p className="validation-message">{message}</p>
);
