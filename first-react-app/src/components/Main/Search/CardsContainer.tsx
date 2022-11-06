import { Card } from './Card/Card';
import { SearchHitType } from 'data/types';
import { useGlobalContext } from 'context/globalContext';

export const CardsContainer = () => {
  const { state } = useGlobalContext();
  const { results, isLoading } = state.search;

  if (isLoading) {
    return (
      <div className="cards-stub" data-testid="loading-stub">
        Loading...
      </div>
    );
  }

  if (!results.hits.length) {
    return (
      <div className="cards-stub" data-testid="no-results-stub">
        No results found, try another search...
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
