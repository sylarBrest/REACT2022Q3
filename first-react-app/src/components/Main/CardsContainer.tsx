import React from 'react';
import Card from './Cards/Card';
import { CardsContainerPropsType, CardsContainerStateType } from 'data/types';
import search from 'services/search';

class CardsContainer extends React.Component<CardsContainerPropsType> {
  state: CardsContainerStateType = {
    data: [],
    isLoading: false,
  };

  async componentDidMount(): Promise<void> {
    const data = await search({ query: this.props.searchQuery });
    this.setState({ data: [...data.hits], isLoading: true });
  }

  render() {
    return (
      <div className="cards" data-testid="cards-container">
        {!this.state.isLoading && <div>Loading...</div>}
        {this.state.data.map((cardData) => (
          <Card {...cardData} key={cardData.id} />
        ))}
      </div>
    );
  }
}

export default CardsContainer;
