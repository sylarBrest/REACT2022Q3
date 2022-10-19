import star from 'assets/svg/star.svg';
import { RatingPropsType } from 'data/types';

const Rating = (props: RatingPropsType) => {
  return (
    <>
      <img className="image-rating" src={star} alt="rating" />
      <p className="card-rating">{props.rating}</p>
    </>
  );
};

export default Rating;
