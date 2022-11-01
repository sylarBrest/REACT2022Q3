import { InputPropsType } from 'data/types';
import { COUNTRIES, SELECT_DEFAULT_OPTION } from 'data/constants';
import { ValidationMessage } from '../ValidationMessage';
import { isValidCountry } from 'utils';

export const Select = (props: InputPropsType) => {
  const { label, register, error } = props;
  const nameF = label[0].toUpperCase() + label.slice(1);

  return (
    <div className={`personal-data-input input-${label}`}>
      <label className="field-label" htmlFor={label}>
        {nameF}:
      </label>
      <select
        className="field"
        id={label}
        {...register('country', {
          validate: (country) => isValidCountry(country) || 'Choose your country',
        })}
        data-testid={`form-select-${label}`}
      >
        <option hidden>{SELECT_DEFAULT_OPTION}</option>
        {COUNTRIES.map((country: string) => (
          <option value={country} key={country.toLowerCase()}>
            {country}
          </option>
        ))}
      </select>
      {error && <ValidationMessage message={error} />}
    </div>
  );
};
