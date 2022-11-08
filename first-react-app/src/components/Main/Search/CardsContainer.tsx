import { Card } from './Card/Card';
import { SearchHitType } from 'data/types';
import { useAppSelector } from 'redux/types';

export const CardsContainer = () => {
  const results = useAppSelector((state) => state.search.results);
  const isLoading = useAppSelector((state) => state.search.isLoading);

  if (isLoading) {
    return (
      <div className="cards-stub" data-testid="loading-stub">
        <span>Loading...</span>
      </div>
    );
  }

  if (!results.hits.length) {
    return (
      <div className="cards-stub" data-testid="no-results-stub">
        <span>No results found, try another search...</span>
      </div>
    );
  }

  return (
    <div className="cards" data-testid="cards-container">
      {results.hits.map((cardData: SearchHitType) => (
        <Card {...cardData} key={cardData.id} />
      ))}
    </div>
  );
};
