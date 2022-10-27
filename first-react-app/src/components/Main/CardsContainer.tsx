import React from 'react';
import Card from './Card/Card';
import { CardsContainerPropsType, CardsContainerStateType, SearchHitType } from 'data/types';
import { basicGetMethod } from 'services/basicGetMethod';
import Modal from './Modal/Modal';

class CardsContainer extends React.Component<CardsContainerPropsType> {
  modalData: SearchHitType | undefined;

  state: CardsContainerStateType = {
    data: [],
    isLoading: false,
    isEmptyData: false,
    isModalVisible: false,
  };

  async componentDidMount(): Promise<void> {
    const data = await basicGetMethod({ query: this.props.searchQuery });
    this.setState({ data: [...data.hits], isLoading: true });
    !data.hits.length
      ? this.setState({ isEmptyData: true })
      : this.setState({ isEmptyData: false });
  }

  async passIdToModal(id: number): Promise<void> {
    const data = await basicGetMethod({ id });
    this.modalData = { ...data.hits[0] };
    this.setState({ isModalVisible: true });
  }

  hideModal() {
    this.setState({ isModalVisible: false });
  }

  render() {
    return (
      <div className="cards" data-testid="cards-container">
        {!this.state.isLoading && (
          <div className="cards-stub" data-testid="loading-stub">
            Loading...
          </div>
        )}
        {this.state.data.map((cardData: SearchHitType) => (
          <Card {...cardData} key={cardData.id} getPhotoId={this.passIdToModal.bind(this)} />
        ))}
        {this.state.isEmptyData && (
          <div className="cards-stub" data-testid="no-results-stub">
            No results found, try another search...
          </div>
        )}
        {this.modalData && this.state.isModalVisible && (
          <Modal onCloseModal={this.hideModal.bind(this)} {...this.modalData} />
        )}
      </div>
    );
  }
}

export default CardsContainer;
