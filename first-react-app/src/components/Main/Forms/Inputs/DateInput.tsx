import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormDataPropsType } from 'data/types';

export const DateInput = React.forwardRef<
  HTMLInputElement,
  ReturnType<UseFormRegister<FormDataPropsType>>
>((props, ref) => {
  const { name, onChange } = props;

  return (
    <div className={`personal-data-input input-${name}`}>
      <label className="field-label" htmlFor={name}>
        Date of birth:
      </label>
      <input
        className="field"
        id={name}
        type="date"
        name={name}
        ref={ref}
        onChange={onChange}
        data-testid={`form-input-${name}`}
      />
    </div>
  );
});
