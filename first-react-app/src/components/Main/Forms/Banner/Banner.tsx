import { BannerPropsType } from 'data/types';
import './Banner.css';

export const Banner = (props: BannerPropsType) => {
  const { name, isVisible } = props;

  return (
    <div className={name} style={{ display: isVisible ? 'flex' : 'none' }} data-testid={name}>
      <span>You succesfully submitted data!</span>
    </div>
  );
};
