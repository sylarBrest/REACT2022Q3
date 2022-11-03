import { useEffect, useState } from 'react';
import { Card } from './Card/Card';
import { SearchData, SearchHitType } from 'data/types';
import { basicGetMethod } from 'services/basicGetMethod';
import { Modal } from './Modal/Modal';
import { useGlobalContext } from 'context/globalContext';
import { ACTION_TYPE } from 'data/constants';

export const CardsContainer = () => {
  const { state, dispatch } = useGlobalContext();
  const { query } = state.search;

  const [isLoading, setIsLoading] = useState(true);
  const [isEmptyData, setIsEmptyData] = useState(false);
  const [modalData, setModalData] = useState<SearchHitType | undefined>(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    !state.search.results.hits.length ? setIsEmptyData(true) : setIsEmptyData(false);
  }, [state.search.results.hits.length]);

  const passIdToModal = async (id: number) => {
    const data = await basicGetMethod({ id });
    setModalData(data.hits[0]);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  /* if (isLoading) {
    return (
      <div className="cards-stub" data-testid="loading-stub">
        Loading...
      </div>
    );
  } */

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
          We found {state.search.results.total} results for the query &quot;<b>{query}</b>&quot;:
        </div>
      )}
      <div className="cards" data-testid="cards-container">
        {state.search.results.hits.map((cardData: SearchHitType) => (
          <Card {...cardData} key={cardData.id} getPhotoId={passIdToModal} />
        ))}
        {modalData && isModalVisible && <Modal onCloseModal={hideModal} {...modalData} />}
      </div>
    </>
  );
};
