import React from 'react';
import { SearchBarPropsType, SearchBarStateType } from 'data/types';

class SearchBar extends React.Component<SearchBarPropsType, SearchBarStateType> {
  constructor(props: SearchBarPropsType) {
    super(props);
    this.state = {
      value: localStorage.getItem('searchBarValue') || '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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

  async handleKeyPress(event: React.KeyboardEvent) {
    const searchInput = event.target as HTMLInputElement;
    if (event.key === 'Enter') {
      const searchQuery = searchInput.value.toLowerCase();
      this.setState({ value: '' }, () => this.props.getSearchQuery(searchQuery));
      localStorage.setItem('searchBarValue', '');
      searchInput.value = '';
    }
  }

  render() {
    return (
      <input
        type="search"
        className="search-bar"
        placeholder="Search photo..."
        defaultValue={this.state.value}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        data-testid="search-bar"
        autoFocus
      />
    );
  }
}

export default SearchBar;
