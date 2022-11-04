import { CardPropsType } from 'data/types';
import './Card.css';

export const Card = (props: CardPropsType) => {
  const { id, webformatURL, getPhotoId } = props;

  return (
    <div className="card" onClick={() => getPhotoId(id)} data-testid={`card-${id}`}>
      <img className="card-image" src={webformatURL} alt="Result Image" />
    </div>
  );
};
