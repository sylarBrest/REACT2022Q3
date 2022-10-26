import React from 'react';
import Card from './Card/Card';
import { CardsContainerPropsType, CardsContainerStateType, SearchHitType } from 'data/types';
import search from 'services/search';
import imageInfo from 'services/imageInfo';
import Modal from './Modal/Modal';

class CardsContainer extends React.Component<CardsContainerPropsType> {
  modalData: SearchHitType | undefined;

  state: CardsContainerStateType = {
    data: [],
    isLoading: false,
    isModalVisible: false,
  };

  async componentDidMount(): Promise<void> {
    const data = await search({ query: this.props.searchQuery });
    this.setState({ data: [...data.hits], isLoading: true });
  }

  async passIdToModal(id: number) {
    const data = await imageInfo(id);
    this.modalData = { ...data.hits[0] };
    this.setState({ isModalVisible: true });
  }

  hideModal() {
    this.setState({ isModalVisible: false });
  }

  render() {
    return (
      <div className="cards" data-testid="cards-container">
        {!this.state.isLoading && <div>Loading...</div>}
        {this.state.data.map((cardData) => (
          <Card {...cardData} key={cardData.id} getPhotoId={this.passIdToModal.bind(this)} />
        ))}
        {this.modalData && (
          <Modal
            isVisible={this.state.isModalVisible}
            setIsVisible={this.hideModal.bind(this)}
            {...this.modalData}
          />
        )}
      </div>
    );
  }
}

export default CardsContainer;
