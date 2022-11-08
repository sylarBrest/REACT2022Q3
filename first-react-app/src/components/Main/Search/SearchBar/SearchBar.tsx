import React, { useState } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { changeQuery } from 'redux/searchSlice';

export const SearchBar = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState(localStorage.getItem('searchBarValue') || '');

  const changeValue = async () => {
    const searchQuery = value.toLowerCase();
    setValue(value);
    dispatch(changeQuery(searchQuery));
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
