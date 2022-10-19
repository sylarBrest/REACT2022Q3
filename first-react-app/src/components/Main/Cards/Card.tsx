import { CardPropsType } from 'data/types';
import Rating from './Rating';
import Voices from './Voices';

const Card = (props: CardPropsType) => {
  const imagePath = `sylarbrest-REACT2022Q3/assets/img/${props.imagePath}`;
  return (
    <div className="card" data-testid={props.title.replace(/\s/g, '-').toLowerCase()}>
      <h3 className="card-title">{props.title}</h3>
      <img className="card-image" src={imagePath} alt={props.title} />
      <p className="card-description">{props.description}</p>
      <p className="card-genres">
        <span>Genres:</span> {props.genres.join(', ')}
      </p>
      <div className="card-numbers">
        <Rating rating={props.rating || 0} />
        <Voices voices={props.voices || 0} />
      </div>
      <div className="card-author-info">
        <p className="card-author">{props.director}</p>
        <p className="card-created-date">{props.year}</p>
      </div>
    </div>
  );
};

export default Card;
