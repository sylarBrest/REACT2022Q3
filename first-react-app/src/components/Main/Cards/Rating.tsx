import star from 'assets/svg/star.svg';
import { TRatingProps } from 'data/types';

const Rating = (props: TRatingProps) => {
  return (
    <>
      <img className="image-rating" src={star} alt="rating" />
      <p className="card-rating">{props.rating}</p>
    </>
  );
};

export default Rating;
