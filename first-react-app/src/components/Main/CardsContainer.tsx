import { useEffect, useState } from 'react';
import { Card } from './Card/Card';
import { CardsContainerPropsType, SearchData, SearchHitType } from 'data/types';
import { basicGetMethod } from 'services/basicGetMethod';
import { Modal } from './Modal/Modal';

export const CardsContainer = (props: CardsContainerPropsType) => {
  const { searchQuery } = props;

  const [data, setData] = useState<SearchData>({
    hits: [],
    total: 0,
    totalHits: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isEmptyData, setIsEmptyData] = useState(false);
  const [modalData, setModalData] = useState<SearchHitType | undefined>(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async (newQuery: string) => {
      const fetchedData: SearchData = await basicGetMethod({ query: newQuery });
      setData(fetchedData);
      setIsLoading(false);
      !fetchedData.hits.length ? setIsEmptyData(true) : setIsEmptyData(false);
    };
    fetchData(searchQuery);
  }, [searchQuery]);

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
      {searchQuery && (
        <div className="cards-stub results">
          We found {data.total} results for the query &quot;<b>{searchQuery}</b>&quot;:
        </div>
      )}
      <div className="cards" data-testid="cards-container">
        {data.hits.map((cardData: SearchHitType) => (
          <Card {...cardData} key={cardData.id} getPhotoId={passIdToModal} />
        ))}
        {modalData && isModalVisible && <Modal onCloseModal={hideModal} {...modalData} />}
      </div>
    </>
  );
};
