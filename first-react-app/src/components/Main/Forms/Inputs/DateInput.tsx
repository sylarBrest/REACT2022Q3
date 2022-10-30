import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormDataPropsType } from 'data/types';

export const DateInput = React.forwardRef<
  HTMLInputElement,
  ReturnType<UseFormRegister<FormDataPropsType>>
>((props, ref) => {
  const { name, onChange } = props;
  const nameL = name.toLowerCase();

  return (
    <div className={`personal-data-input input-${nameL}`}>
      <label className="field-label" htmlFor={nameL}>
        Date of birth:
      </label>
      <input
        className="field"
        id={nameL}
        type="date"
        name={name}
        ref={ref}
        onChange={onChange}
        data-testid={`form-input-${nameL}`}
      />
    </div>
  );
});
