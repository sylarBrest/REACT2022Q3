import React from 'react';
import { SearchWrapperStateType } from 'data/types';
import SearchBar from './SearchBar/SearchBar';
import CardsContainer from './CardsContainer';
import { basicGetMethod } from 'services/basicGetMethod';

class SearchWrapper extends React.Component<Record<string, never>, SearchWrapperStateType> {
  state: SearchWrapperStateType = {
    searchQuery: '',
    data: {
      hits: [],
      total: 0,
      totalHits: 0,
    },
    isLoading: true,
    isEmptyData: false,
  };

  async handleChange(searchQuery: string) {
    const data = await basicGetMethod({ query: searchQuery });
    this.setState({ data, isLoading: false });
    !data.hits.length
      ? this.setState({ isEmptyData: true })
      : this.setState({ isEmptyData: false });
    this.setState({ searchQuery });
  }

  render() {
    return (
      <>
        <SearchBar getSearchQuery={this.handleChange.bind(this)} />
        {this.state.isLoading ? (
          <div className="cards-stub" data-testid="loading-stub">
            Loading...
          </div>
        ) : this.state.isEmptyData ? (
          <div className="cards-stub" data-testid="no-results-stub">
            No results found, try another search...
          </div>
        ) : this.state.searchQuery ? (
          <div className="cards-stub results">
            We found {this.state.data.total} results for the query &quot;
            <b>{this.state.searchQuery}</b>&quot;:
          </div>
        ) : null}
        <CardsContainer searchQuery={this.state.searchQuery} data={this.state.data} />
      </>
    );
  }
}

export default SearchWrapper;
