import React from 'react';
import { SearchHitsArrayType, SearchWrapperStateType } from 'data/types';
import SearchBar from './SearchBar';
import CardsContainer from './CardsContainer';

class SearchWrapper extends React.Component<Record<string, never>, SearchWrapperStateType> {
  state: SearchWrapperStateType = {
    data: [],
  };
  searchQuery = '';

  handleChange(searchData: SearchHitsArrayType) {
    this.setState({ data: [...this.state.data, ...searchData] });
  }

  render() {
    return (
      <>
        <SearchBar getSearchData={this.handleChange.bind(this)} />
        {this.state.data.length && <CardsContainer searchData={this.state.data} />}
      </>
    );
  }
}

export default SearchWrapper;
