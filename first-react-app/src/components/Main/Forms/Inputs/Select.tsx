import React from 'react';
import { FormDataPropsType } from 'data/types';
import { COUNTRIES, SELECT_DEFAULT_OPTION } from 'data/constants';
import { UseFormRegister } from 'react-hook-form';

export const Select = React.forwardRef<
  HTMLSelectElement,
  ReturnType<UseFormRegister<FormDataPropsType>>
>((props, ref) => {
  const { name, onChange } = props;
  const nameF = name[0].toUpperCase() + name.slice(1);

  return (
    <div className={`personal-data-input input-${name}`}>
      <label className="field-label" htmlFor={name}>
        {nameF}:
      </label>
      <select
        className="field"
        id={name}
        name={name}
        ref={ref}
        onChange={onChange}
        data-testid={`form-select-${name}`}
      >
        <option hidden>{SELECT_DEFAULT_OPTION}</option>
        {COUNTRIES.map((country: string) => (
          <option value={country} key={country.toLowerCase()}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
});
