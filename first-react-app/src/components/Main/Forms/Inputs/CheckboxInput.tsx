import { InputPropsType } from 'data/types';
import { MIN_AGE } from 'data/constants';
import { ValidationMessage } from '../ValidationMessage';

export const CheckboxInput = (props: InputPropsType) => {
  const { label, register, error } = props;

  return (
    <div className={label}>
      <input
        className="field"
        id={label}
        type="checkbox"
        {...register('consent', {
          required: { value: true, message: 'Please give your consent by checking the label' },
        })}
        data-testid={`form-input-${label}`}
      />
      <label className="field-label" htmlFor={label}>
        I confirm that I am over {MIN_AGE} years old and consent to personal data
      </label>
      {error && <ValidationMessage message={error} />}
    </div>
  );
};
