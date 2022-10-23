import React from 'react';
import Card from './Cards/Card';
import { MOVIES_DATA } from 'data/constants';
import { CardPropsType, CardsContainerPropsType } from 'data/types';

class CardsContainer extends React.Component<CardsContainerPropsType> {
  constructor(props: CardsContainerPropsType) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render(): React.ReactNode {
    console.log(this.props.searchData);
    return (
      <div className="cards" data-testid="cards-container">
        {MOVIES_DATA.map((movieData: CardPropsType) => (
          <Card {...movieData} key={movieData.title.replace(/\s/g, '-').toLowerCase()} />
        ))}
      </div>
    );
  }
}

export default CardsContainer;
