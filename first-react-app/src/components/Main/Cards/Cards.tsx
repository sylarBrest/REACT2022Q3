import Card from './Card';
import { MOVIES_DATA } from 'data/constants';
import { CardPropsType } from 'data/types';

const Cards = () => {
  return (
    <div className="cards" data-testid="cards-container">
      {MOVIES_DATA.map((movieData: CardPropsType) => (
        <Card {...movieData} key={movieData.title.replace(/\s/g, '-').toLowerCase()} />
      ))}
    </div>
  );
};

export default Cards;
