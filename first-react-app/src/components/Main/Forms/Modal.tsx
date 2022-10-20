import React from 'react';
import { ModalPropsType } from 'data/types';

const TextInput = React.forwardRef<HTMLDivElement, ModalPropsType>((props, ref) => {
  const { name, isVisible } = props;

  return (
    <div
      className={name}
      style={{ display: isVisible ? 'flex' : 'none' }}
      ref={ref}
      data-testid={name}
    >
      <span>You succesfully submitted data!</span>
    </div>
  );
});

export default TextInput;
