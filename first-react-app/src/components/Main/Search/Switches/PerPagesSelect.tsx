import { useGlobalContext } from 'context/globalContext';
import { ACTION_TYPE, PER_PAGE_VALUES } from 'data/constants';
import { SearchData } from 'data/types';
import { basicGetMethod } from 'services/basicGetMethod';

export const PerPageSelect = () => {
  const { state, dispatch } = useGlobalContext();
  const { query, imageType } = state.search;

  const handleChange = async (event: React.ChangeEvent) => {
    console.log('per page', query);
    const selectPerPage = event.target as HTMLSelectElement;
    dispatch({
      type: ACTION_TYPE.changePerPage,
      payload: { perPage: +selectPerPage.value, query, imageType, page: 1 },
    });
    const fetchedData: SearchData = await basicGetMethod({
      query,
      imageType,
      page: 1,
      perPage: +selectPerPage.value,
    });
    dispatch({ type: ACTION_TYPE.saveSearchResults, payload: fetchedData });
  };

  return (
    <div className="per-page-switch">
      {'Results per page: '}
      <select
        className="per-page-select"
        onChange={handleChange}
        value={state.search.pagination.perPage}
      >
        {PER_PAGE_VALUES.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
