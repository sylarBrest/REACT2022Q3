import React from 'react';
import { BannerPropsType } from 'data/types';
import './Banner.css';

export const Banner = React.forwardRef<HTMLDivElement, BannerPropsType>((props, ref) => {
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
