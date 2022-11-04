import { useGlobalContext } from 'context/globalContext';
import { ACTION_TYPE } from 'data/constants';
import { SearchData } from 'data/types';
import { basicGetMethod } from 'services/basicGetMethod';

export const PageSelect = () => {
  const { state, dispatch } = useGlobalContext();
  const totalPages = Math.ceil(state.search.results.totalHits / state.search.pagination.perPage);

  const handleChange = async (event: React.ChangeEvent) => {
    const selectPerPage = event.target as HTMLSelectElement;
    dispatch({ type: ACTION_TYPE.changePage, payload: { page: +selectPerPage.value } });
    console.log(state.search.pagination.page, selectPerPage.value);
    const fetchedData: SearchData = await basicGetMethod({
      query: state.search.query,
      imageType: state.search.imageType,
      page: +selectPerPage.value,
      perPage: state.search.pagination.perPage,
    });
    dispatch({ type: ACTION_TYPE.saveSearchResults, payload: fetchedData });
  };

  return (
    <div className="page-switch">
      {'Page: '}
      <select className="page-select" onChange={handleChange}>
        {new Array(totalPages).fill(1).map((_page, index) => (
          <option value={index + 1} key={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      {' / '}
      {totalPages}
    </div>
  );
};
