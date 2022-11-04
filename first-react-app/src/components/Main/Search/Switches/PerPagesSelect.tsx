import { PER_PAGE_VALUES } from 'data/constants';

export const PerPageSelect = () => {
  return (
    <div className="per-page-switch">
      {'Results per page: '}
      <select className="per-page-select">
        {PER_PAGE_VALUES.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
