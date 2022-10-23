import React from 'react';
import { SearchWrapperStateType } from 'data/types';
import SearchBar from './SearchBar';
import CardsContainer from './CardsContainer';

class SearchWrapper extends React.Component<Record<string, never>, SearchWrapperStateType> {
  state: SearchWrapperStateType = {
    searchQuery: '',
  };

  handleChange(searchQuery: string) {
    this.setState({ searchQuery });
  }

  render() {
    return (
      <>
        <SearchBar getSearchQuery={this.handleChange.bind(this)} />
        {this.state.searchQuery && <CardsContainer searchQuery={this.state.searchQuery} />}
      </>
    );
  }
}

export default SearchWrapper;
