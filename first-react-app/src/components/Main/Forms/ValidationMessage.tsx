import { ValidationMessagePropsType } from 'data/types';

export const ValidationMessage = (props: ValidationMessagePropsType) => {
  const { message } = props;

  return <p className="validation-message">{message}</p>;
};
