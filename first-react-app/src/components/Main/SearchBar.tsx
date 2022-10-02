import React from 'react';
import { TSearchBarProps, TSearchBarState } from 'types';

class SearchBar extends React.Component<TSearchBarProps, TSearchBarState> {
  constructor(props: TSearchBarProps) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentWillUnmount() {
    localStorage.setItem('searchBarValue', this.state.value);
  }

  render() {
    return (
      <input type="search" placeholder={this.props.placeholder} value={this.state.value}></input>
    );
  }
}

export default SearchBar;
