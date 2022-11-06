import { CardPropsType } from 'data/types';
import { Link } from 'react-router-dom';
import './Card.css';

export const Card = ({ id, webformatURL }: CardPropsType) => {
  return (
    <div className="card" data-testid={'card'}>
      <Link className="card-link" to={`/image-info/${id}`} data-testid={'card-link'}>
        <img className="card-image" src={webformatURL} alt="Result Image" />
      </Link>
    </div>
  );
};
