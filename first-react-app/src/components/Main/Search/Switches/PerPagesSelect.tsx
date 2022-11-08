import { PER_PAGE_VALUES } from 'data/constants';
import { changePerPage } from 'redux/searchSlice';
import { useAppDispatch, useAppSelector } from 'redux/types';

export const PerPageSelect = () => {
  const dispatch = useAppDispatch();
  const perPage = useAppSelector((state) => state.search.pagination.perPage);

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changePerPage(+event.target.value));
  };

  return (
    <div className="per-page-switch">
      <span>Results per page: </span>
      <select className="per-page-select" onChange={handleChange} value={perPage}>
        {PER_PAGE_VALUES.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
