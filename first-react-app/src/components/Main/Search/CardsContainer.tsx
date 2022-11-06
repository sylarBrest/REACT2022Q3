import { useEffect, useState } from 'react';
import { Card } from './Card/Card';
import { SearchHitType } from 'data/types';
import { useGlobalContext } from 'context/globalContext';

export const CardsContainer = () => {
  const { state } = useGlobalContext();
  const { results, isLoading } = state.search;

  const [isEmptyData, setIsEmptyData] = useState(false);

  useEffect(() => {
    !results.hits.length ? setIsEmptyData(true) : setIsEmptyData(false);
  }, [results.hits.length]);

  if (isLoading) {
    return (
      <div className="cards-stub" data-testid="loading-stub">
        Loading...
      </div>
    );
  }

  if (isEmptyData) {
    return (
      <div className="cards-stub" data-testid="no-results-stub">
        No results found for {state.search.query}, try another search...
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
