import { MIN_AGE } from 'data/constants';
import { InputPropsType } from 'data/types';
import { isValidBirthDate } from 'utils';
import { ValidationMessage } from '../ValidationMessage';

export const DateInput = ({ label, register, error }: InputPropsType) => {
  const nameL = label.toLowerCase();

  return (
    <div className={`personal-data-input input-${nameL}`}>
      <label className="field-label" htmlFor={nameL}>
        Date of birth:
      </label>
      <input
        className="field"
        id={nameL}
        type="date"
        {...register('birthDate', {
          validate: {
            emptyValue: (birthDate) => !!birthDate || 'Choose or type your date of birth',
            under18: (birthDate) =>
              isValidBirthDate(birthDate) || `You must be ${MIN_AGE} years old`,
          },
        })}
        data-testid={`form-input-${nameL}`}
      />
      {error && <ValidationMessage message={error} />}
    </div>
  );
};
