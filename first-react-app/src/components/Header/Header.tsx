import Menu from './Menu';
import './Header.css';

function Header() {
  return (
    <>
      <header className="header" data-testid="header">
        <Menu />
      </header>
    </>
  );
}

export default Header;
