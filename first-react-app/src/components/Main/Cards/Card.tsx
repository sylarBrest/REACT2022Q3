import { SearchHitType } from 'data/types';
import './Card.css';

const Card = (props: SearchHitType) => {
  const { id, webformatURL, tags } = props;
  return (
    <div className="card" data-testid={`card-${id}`}>
      <img className="card-image" src={webformatURL} alt={tags} />
    </div>
  );
};

export default Card;
