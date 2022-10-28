import React from 'react';
import Card from './Card/Card';
import { CardsContainerPropsType, CardsContainerStateType, SearchHitType } from 'data/types';
import { basicGetMethod } from 'services/basicGetMethod';
import { Modal } from './Modal/Modal';

class CardsContainer extends React.Component<CardsContainerPropsType> {
  modalData?: SearchHitType;

  state: CardsContainerStateType = {
    isModalVisible: false,
  };

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
        {this.props.data.hits.map((cardData: SearchHitType) => (
          <Card {...cardData} key={cardData.id} getPhotoId={this.passIdToModal.bind(this)} />
        ))}
        {this.modalData && this.state.isModalVisible && (
          <Modal onCloseModal={this.hideModal.bind(this)} {...this.modalData} />
        )}
      </div>
    );
  }
}

export default CardsContainer;
