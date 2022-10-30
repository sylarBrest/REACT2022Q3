import React from 'react';
import { FormDataPropsType } from 'data/types';
import { MIN_AGE } from 'data/constants';
import { UseFormRegister } from 'react-hook-form';

export const CheckboxInput = React.forwardRef<
  HTMLInputElement,
  ReturnType<UseFormRegister<FormDataPropsType>>
>((props, ref) => {
  const { name, onChange } = props;

  return (
    <div className={name}>
      <input
        className="field"
        id={name}
        type="checkbox"
        name={name}
        value="agree"
        ref={ref}
        onChange={onChange}
        data-testid={`form-input-${name}`}
      />
      <label className="field-label" htmlFor={name}>
        I confirm that I am over {MIN_AGE} years old and consent to personal data
      </label>
    </div>
  );
});
