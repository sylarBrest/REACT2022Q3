import React from 'react';
import { TSearchBarProps, TSearchBarState } from 'types';

class SearchBar extends React.Component<TSearchBarProps, TSearchBarState> {
  constructor(props: TSearchBarProps) {
    super(props);
    this.state = {
      value: localStorage.getItem('searchBarValue') || '',
    };
  }

  componentDidMount() {
    this.setState({ value: localStorage.getItem('searchBarValue') || '' });
  }

  componentWillUnmount() {
    localStorage.setItem('searchBarValue', this.state.value);
  }

  saveValueOnChange = (event: React.ChangeEvent) => {
    this.setState({ value: (event.target as HTMLInputElement).value || '' });
  };

  render() {
    return (
      <input
        type="search"
        className="input"
        placeholder={this.props.placeholder}
        defaultValue={this.state.value}
        onChange={this.saveValueOnChange}
      />
    );
  }
}

export default SearchBar;
