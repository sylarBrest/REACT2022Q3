import React from 'react';
import { InputPropsType } from 'data/types';
import { MIN_AGE } from 'data/constants';

const RadioInput = React.forwardRef<HTMLInputElement, InputPropsType>((props, ref) => {
  const { name } = props;

  return (
    <div className={name}>
      <input
        className="field"
        id={name}
        type="checkbox"
        name={name}
        value="agree"
        ref={ref}
        data-testid={`form-input-${name}`}
      />
      <label className="field-label" htmlFor={name}>
        I confirm that I am over {MIN_AGE} years old and consent to personal data
      </label>
    </div>
  );
});

export default RadioInput;
