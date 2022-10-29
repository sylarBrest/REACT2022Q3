import { Menu } from './Menu';
import './Header.css';

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <Menu />
    </header>
  );
};
