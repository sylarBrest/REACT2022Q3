import React from 'react';
import { SearchBarPropsType, SearchBarStateType } from 'data/types';

class SearchBar extends React.Component<SearchBarPropsType, SearchBarStateType> {
  constructor(props: SearchBarPropsType) {
    super(props);
    this.state = {
      value: localStorage.getItem('searchBarValue') || '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ value: localStorage.getItem('searchBarValue') || '' });
  }

  componentWillUnmount() {
    localStorage.setItem('searchBarValue', this.state.value);
  }

  handleChange(event: React.ChangeEvent) {
    const searchInput = event.target as HTMLInputElement;
    this.setState({ value: searchInput.value });
  }

  render() {
    return (
      <input
        type="search"
        className="search-bar"
        placeholder={this.props.placeholder}
        defaultValue={this.state.value}
        onChange={this.handleChange}
        data-testid="search-bar"
      />
    );
  }
}

export default SearchBar;
