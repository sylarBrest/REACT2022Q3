import { useGlobalContext } from 'context/globalContext';
import { ACTION_TYPE, PER_PAGE_VALUES } from 'data/constants';

export const PerPageSelect = () => {
  const { state, dispatch } = useGlobalContext();
  const { query, imageType } = state.search;

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: ACTION_TYPE.changePerPage,
      payload: { perPage: +event.target.value, query, imageType, page: 1 },
    });
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
