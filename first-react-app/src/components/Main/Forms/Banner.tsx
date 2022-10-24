import React from 'react';
import { BannerPropsType } from 'data/types';

const Banner = React.forwardRef<HTMLDivElement, BannerPropsType>((props, ref) => {
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

export default Banner;
