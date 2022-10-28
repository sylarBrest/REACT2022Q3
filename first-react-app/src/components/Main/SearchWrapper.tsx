import { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import CardsContainer from './CardsContainer';
import { basicGetMethod } from 'services/basicGetMethod';
import { SearchData } from 'data/types';

export const SearchWrapper = () => {
  const [searchQuery, setSeacrhQuery] = useState('');
  const [data, setData] = useState<SearchData>({
    hits: [],
    total: 0,
    totalHits: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isEmptyData, setIsEmptyData] = useState(false);

  const handleChange = async (searchQuery: string) => {
    const fetchData = await basicGetMethod({ query: searchQuery });
    setData(fetchData);
    setIsLoading(false);
    !fetchData.hits.length ? setIsEmptyData(true) : setIsEmptyData(false);
    setSeacrhQuery(searchQuery);
  };

  return (
    <>
      <SearchBar getSearchQuery={handleChange} />
      {isLoading ? (
        <div className="cards-stub" data-testid="loading-stub">
          Loading...
        </div>
      ) : isEmptyData ? (
        <div className="cards-stub" data-testid="no-results-stub">
          No results found, try another search...
        </div>
      ) : (
        searchQuery && (
          <div className="cards-stub results">
            We found {data.total} results for the query &quot;
            <b>{searchQuery}</b>&quot;:
          </div>
        )
      )}
      <CardsContainer searchQuery={searchQuery} data={data} />
    </>
  );
};
