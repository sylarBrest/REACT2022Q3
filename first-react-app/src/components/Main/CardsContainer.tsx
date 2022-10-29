import { useState } from 'react';
import { Card } from './Card/Card';
import { CardsContainerPropsType, SearchHitType } from 'data/types';
import { basicGetMethod } from 'services/basicGetMethod';
import { Modal } from './Modal/Modal';

export const CardsContainer = (props: CardsContainerPropsType) => {
  const [modalData, setModalData] = useState<SearchHitType | undefined>(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const passIdToModal = async (id: number) => {
    const data = await basicGetMethod({ id });
    setModalData(data.hits[0]);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="cards" data-testid="cards-container">
      {props.data.hits.map((cardData: SearchHitType) => (
        <Card {...cardData} key={cardData.id} getPhotoId={passIdToModal} />
      ))}
      {modalData && isModalVisible && <Modal onCloseModal={hideModal} {...modalData} />}
    </div>
  );
};
