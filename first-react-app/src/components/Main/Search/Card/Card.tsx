import { CardPropsType } from 'data/types';
import { Link } from 'react-router-dom';
import './Card.css';

export const Card = (props: CardPropsType) => {
  const { id, webformatURL } = props;

  return (
    <div className="card" data-testid={`card-${id}`}>
      <Link className="card-link" to={`/image-info/${id}`} data-testid={`card-link-${id}`}>
        <img className="card-image" src={webformatURL} alt="Result Image" />
      </Link>
    </div>
  );
};
