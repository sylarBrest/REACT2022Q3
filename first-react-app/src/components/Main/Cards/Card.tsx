import { TCardProps } from 'types';

import star from 'assets/svg/star.svg';
import person from 'assets/svg/person.svg';

const Card = (props: TCardProps) => {
  return (
    <div className="card">
      <h3 className="card-title">{props.title}</h3>
      <img className="card-image" src={props.imagePath} alt={props.title} />
      <p className="card-description">{props.description}</p>
      <p className="card-genres">
        <span>Genres:</span> {props.genres.join(', ')}
      </p>
      <div className="card-numbers">
        <img className="image-rating" src={star} alt="rating" />
        <p className="card-rating">{props.rating}</p>
        <img className="image-voices" src={person} alt="voices" />
        <p className="card-voices">{props.voices}</p>
      </div>
      <div className="card-author-info">
        <p className="card-author">{props.director}</p>
        <p className="card-created-date">{props.year}</p>
      </div>
    </div>
  );
};

export default Card;
