import React, { useEffect, useState } from 'react';
import { SearchBarPropsType } from 'data/types';

export const SearchBar = (props: SearchBarPropsType) => {
  const { getSearchQuery } = props;

  const [value, setValue] = useState(localStorage.getItem('searchBarValue') || '');

  useEffect(() => {
    const searchQuery = localStorage.getItem('searchBarValue') || '';
    setValue(searchQuery);
    getSearchQuery(searchQuery);
  }, [getSearchQuery, props]);

  const changeValue = () => {
    const searchQuery = value.toLowerCase();
    setValue(value);
    getSearchQuery(searchQuery);
    localStorage.setItem('searchBarValue', value);
  };

  const handleChange = (event: React.ChangeEvent) => {
    const searchInput = event.target as HTMLInputElement;
    setValue(searchInput.value);
    localStorage.setItem('searchBarValue', searchInput.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      changeValue();
    }
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
        data-testid="search-bar"
        autoFocus
      />
      <button className="search-button" onClick={handleClick} />
    </div>
  );
};
