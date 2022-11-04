import { PageSelect } from './PageSelect';
import { PerPageSelect } from './PerPagesSelect';

export const PaginationSwitches = () => {
  return (
    <div className="pagination-switches">
      <PerPageSelect />
      <PageSelect />
    </div>
  );
};
