import React, { useState } from 'react';
import { useGlobalContext } from 'context/globalContext';
import { ACTION_TYPE } from 'data/constants';

export const SearchBar = () => {
  const { state, dispatch } = useGlobalContext();

  const {
    imageType,
    pagination: { perPage },
  } = state.search;

  const [value, setValue] = useState(localStorage.getItem('searchBarValue') || '');

  const changeValue = async () => {
    const searchQuery = value.toLowerCase();
    setValue(value);
    dispatch({
      type: ACTION_TYPE.changeQuery,
      payload: { query: searchQuery, imageType, page: 1, perPage },
    });
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
