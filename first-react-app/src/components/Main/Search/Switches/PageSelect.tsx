import { useGlobalContext } from 'context/globalContext';
import { ACTION_TYPE } from 'data/constants';

export const PageSelect = () => {
  const { state, dispatch } = useGlobalContext();
  const {
    query,
    imageType,
    pagination: { perPage },
    results: { totalHits },
  } = state.search;
  const totalPages = Math.ceil(totalHits / perPage);
  const arrayNumPages = new Array(totalPages).fill(1).map((val, ind) => val * (ind + 1));

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: ACTION_TYPE.changePage,
      payload: { page: +event.target.value, query, imageType, perPage },
    });
  };

  return (
    <div className="page-switch">
      {'Page: '}
      <select className="page-select" onChange={handleChange} value={state.search.pagination.page}>
        {arrayNumPages.map((page) => (
          <option value={page} key={page}>
            {page}
          </option>
        ))}
      </select>
      {' / '}
      {totalPages}
    </div>
  );
};
