import Card from './Card';
import { MOVIES_DATA } from 'data/constants';
import { TCardProps } from 'data/types';

const Cards = () => {
  return (
    <div className="cards" data-testid="cards-container">
      {MOVIES_DATA.map((movieData: TCardProps) => (
        <Card {...movieData} key={movieData.title.replace(/\s/g, '-').toLowerCase()} />
      ))}
    </div>
  );
};

export default Cards;
