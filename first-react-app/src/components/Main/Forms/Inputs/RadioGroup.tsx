import { InputPropsType } from 'data/types';
import { ValidationMessage } from '../ValidationMessage';
import { RadioInput } from './RadioInput';

export const RadioGroup = (props: InputPropsType) => {
  const { label, register, error } = props;
  const nameF = label[0].toUpperCase() + label.slice(1);

  return (
    <div className={`personal-data-input input-${label}`}>
      <span className="field-label">{nameF}: </span>
      <fieldset className={`${label}-choice`}>
        <RadioInput label={label} register={register} gender="male" />
        <RadioInput label={label} register={register} gender="female" />
      </fieldset>
      {error && <ValidationMessage message={error} />}
    </div>
  );
};
