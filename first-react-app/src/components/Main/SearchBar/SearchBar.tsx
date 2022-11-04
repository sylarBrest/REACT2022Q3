import React, { useState } from 'react';
import { useGlobalContext } from 'context/globalContext';
import { ACTION_TYPE } from 'data/constants';
import { SearchData } from 'data/types';
import { basicGetMethod } from 'services/basicGetMethod';

export const SearchBar = () => {
  const { dispatch } = useGlobalContext();

  const [value, setValue] = useState(localStorage.getItem('searchBarValue') || '');

  const fetchData = async (newQuery: string) => {
    const fetchedData: SearchData = await basicGetMethod({ query: newQuery });
    dispatch({ type: ACTION_TYPE.saveSearchResults, payload: fetchedData });
  };

  const changeValue = () => {
    const searchQuery = value.toLowerCase();
    setValue(value);
    dispatch({ type: ACTION_TYPE.changeQuery, payload: { query: searchQuery } });
    fetchData(searchQuery);
    localStorage.setItem('searchBarValue', value);
  };

  const handleChange = (event: React.ChangeEvent) => {
    const searchInput = event.target as HTMLInputElement;
    setValue(searchInput.value);
    localStorage.setItem('searchBarValue', searchInput.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    event.key === 'Enter' && changeValue();
  };

  const handleClick = () => {
    changeValue();
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        className="search-input"
        placeholder="Search photo..."
        defaultValue={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        data-testid="search-bar-input"
        autoFocus
      />
      <button className="search-button" onClick={handleClick} data-testid="search-bar-button" />
    </div>
  );
};
