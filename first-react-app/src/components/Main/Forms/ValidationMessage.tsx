import { ValidationMessagePropsType } from 'data/types';

const ValidationMessage = (props: ValidationMessagePropsType) => {
  const { isInvalid, message } = props;

  return (
    <p className="validation-message" style={{ opacity: isInvalid ? '1' : '0' }}>
      {message}
    </p>
  );
};

export default ValidationMessage;
