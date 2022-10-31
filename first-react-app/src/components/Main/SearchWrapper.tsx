import { useState } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { CardsContainer } from './CardsContainer';

export const SearchWrapper = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (newQuery: string) => {
    setSearchQuery(newQuery);
  };

  return (
    <>
      <SearchBar getSearchQuery={handleChange} />
      <CardsContainer searchQuery={searchQuery} />
    </>
  );
};
