import React from 'react';
import { InputPropsType } from 'data/types';
import photo from 'assets/svg/photo.svg';

const PhotoInput = React.forwardRef<HTMLInputElement, InputPropsType>((props, ref) => {
  const { name } = props;
  const nameF = name[0].toUpperCase() + name.slice(1);

  return (
    <>
      <label className="field-label" htmlFor={`${name}-upload`}>
        <img className={`${name}-label`} src={photo} alt={`${nameF} Upload`} />
        Upload your photo
      </label>
      <input
        className={`field ${name}-field`}
        id={`${name}-upload`}
        type="file"
        name={name}
        capture="environment"
        ref={ref}
        data-testid={`form-input-${name}`}
      />
    </>
  );
});

export default PhotoInput;
