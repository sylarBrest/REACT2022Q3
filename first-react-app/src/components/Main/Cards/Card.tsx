import { CardPropsType } from 'data/types';
import Rating from './Rating';
import Voices from './Voices';

const Card = (props: CardPropsType) => {
  const { id, title, imageName, description, director, genres, rating, voices, year } = props;
  const imagePath = `sylarbrest-REACT2022Q3/assets/img/${imageName}`;
  return (
    <div className="card" data-testid={`card-${id}`}>
      <h3 className="card-title">{title}</h3>
      <img className="card-image" src={imagePath} alt={title} />
      <p className="card-description">{description}</p>
      <p className="card-genres">
        <span>Genres:</span> {genres.join(', ')}
      </p>
      <div className="card-numbers">
        <Rating rating={rating || 0} />
        <Voices voices={voices || 0} />
      </div>
      <div className="card-author-info">
        <p className="card-author">{director}</p>
        <p className="card-created-date">{year}</p>
      </div>
    </div>
  );
};

export default Card;
