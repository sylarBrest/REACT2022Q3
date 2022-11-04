import { ImageTypeSwitches } from './ImageTypeSwitches';
import { PaginationSwitches } from './PaginationSwitches';
import './Switches.css';

export const Switches = () => {
  return (
    <div className="switches">
      <ImageTypeSwitches />
      <PaginationSwitches />
    </div>
  );
};
