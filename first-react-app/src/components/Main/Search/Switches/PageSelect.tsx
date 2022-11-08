import { changePage } from 'redux/searchSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

export const PageSelect = () => {
  const dispatch = useAppDispatch();
  const curPage = useAppSelector((state) => state.search.pagination.page);

  const totalPages = useAppSelector((state) =>
    Math.ceil(state.search.results.totalHits / state.search.pagination.perPage)
  );
  const arrayNumPages = new Array(totalPages).fill(1).map((val, ind) => val * (ind + 1));

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changePage(+event.target.value));
  };

  return (
    <div className="page-switch">
      <span>Page: </span>
      <select className="page-select" onChange={handleChange} value={curPage}>
        {arrayNumPages.map((page) => (
          <option value={page} key={page}>
            {page}
          </option>
        ))}
      </select>
      <span> / </span>
      {totalPages}
    </div>
  );
};
