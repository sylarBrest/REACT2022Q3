import React from 'react';
import { TSearchBarProps } from 'types';

class SearchBar extends React.Component {
  constructor(props: TSearchBarProps) {
    super(props);
  }

  render() {
    return <input type="search" placeholder="Search..."></input>;
  }
}

export default SearchBar;
