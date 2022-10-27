import React from 'react';
import Card from './Card/Card';
import { CardsContainerPropsType, CardsContainerStateType, SearchHitType } from 'data/types';
import { basicGetMethod } from 'services/basicGetMethod';
import Modal from './Modal/Modal';

class CardsContainer extends React.Component<CardsContainerPropsType> {
  modalData?: SearchHitType;

  state: CardsContainerStateType = {
    data: {
      hits: [],
      total: 0,
      totalHits: 0,
    },
    isLoading: true,
    isEmptyData: false,
    isModalVisible: false,
  };

  async componentDidMount(): Promise<void> {
    const data = await basicGetMethod({ query: this.props.searchQuery });
    this.setState({ data, isLoading: false });
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
    if (this.state.isLoading) {
      return (
        <div className="cards-stub" data-testid="loading-stub">
          Loading...
        </div>
      );
    }

    if (this.state.isEmptyData) {
      return (
        <div className="cards-stub" data-testid="no-results-stub">
          No results found, try another search...
        </div>
      );
    }

    return (
      <>
        {this.props.searchQuery && (
          <div className="cards-stub results">
            We found {this.state.data.total} results for the query &quot;
            <b>{this.props.searchQuery}</b>&quot;:
          </div>
        )}
        <div className="cards" data-testid="cards-container">
          {this.state.data.hits.map((cardData: SearchHitType) => (
            <Card {...cardData} key={cardData.id} getPhotoId={this.passIdToModal.bind(this)} />
          ))}
          {this.modalData && this.state.isModalVisible && (
            <Modal onCloseModal={this.hideModal.bind(this)} {...this.modalData} />
          )}
        </div>
      </>
    );
  }
}

export default CardsContainer;
