import React, { useEffect, useState } from 'react';
import { SearchBarPropsType } from 'data/types';

export const SearchBar = (props: SearchBarPropsType) => {
  const [value, setValue] = useState(localStorage.getItem('searchBarValue') || '');

  useEffect(() => {
    const searchQuery = localStorage.getItem('searchBarValue') || '';
    setValue(searchQuery);
    props.getSearchQuery(searchQuery);
  }, [props]);

  const handleChange = (event: React.ChangeEvent) => {
    const searchInput = event.target as HTMLInputElement;
    setValue(searchInput.value);
    localStorage.setItem('searchBarValue', searchInput.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    const searchInput = event.target as HTMLInputElement;
    if (event.key === 'Enter') {
      const searchQuery = searchInput.value.toLowerCase();
      setValue(searchInput.value);
      props.getSearchQuery(searchQuery);
      localStorage.setItem('searchBarValue', searchInput.value);
    }
  };

  return (
    <input
      type="search"
      className="search-bar"
      placeholder="Search photo..."
      defaultValue={value}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      data-testid="search-bar"
      autoFocus
    />
  );
};
