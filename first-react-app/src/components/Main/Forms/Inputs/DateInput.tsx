import React from 'react';
import { InputPropsType } from 'data/types';

const DateInput = React.forwardRef<HTMLInputElement, InputPropsType>((props, ref) => {
  const { name } = props;

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
        data-testid={`form-input-${name}`}
      />
    </div>
  );
});

export default DateInput;
