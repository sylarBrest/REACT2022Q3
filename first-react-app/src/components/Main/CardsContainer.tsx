import { useEffect, useState } from 'react';
import { Card } from './Card/Card';
import { SearchHitType } from 'data/types';
import { basicGetMethod } from 'services/basicGetMethod';
import { Modal } from './Modal/Modal';
import { useGlobalContext } from 'context/globalContext';

export const CardsContainer = () => {
  const { state } = useGlobalContext();
  const { query, results, isLoading } = state.search;

  const [isEmptyData, setIsEmptyData] = useState(false);
  const [modalData, setModalData] = useState<SearchHitType | undefined>(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    !results.hits.length ? setIsEmptyData(true) : setIsEmptyData(false);
  }, [results.hits.length]);

  const passIdToModal = async (id: number) => {
    const data = await basicGetMethod({ id });
    setModalData(data.hits[0]);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  if (isLoading) {
    return (
      <div className="cards-stub" data-testid="loading-stub">
        Loading...
      </div>
    );
  }

  if (isEmptyData) {
    return (
      <div className="cards-stub" data-testid="no-results-stub">
        No results found, try another search...
      </div>
    );
  }

  return (
    <>
      {query && (
        <div className="cards-stub results">
          We found {results.total} results for the query &quot;<b>{query}</b>&quot;:
        </div>
      )}
      <div className="cards" data-testid="cards-container">
        {results.hits.map((cardData: SearchHitType) => (
          <Card {...cardData} key={cardData.id} getPhotoId={passIdToModal} />
        ))}
        {modalData && isModalVisible && <Modal onCloseModal={hideModal} {...modalData} />}
      </div>
    </>
  );
};
