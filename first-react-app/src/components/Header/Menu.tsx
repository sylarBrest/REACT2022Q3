import Item from './Item';

function Menu() {
  return (
    <nav className="menu" data-testid="nav-menu">
      <Item path="/" name="Home" />
      <Item path="/about-us" name="About Us" />
    </nav>
  );
}

export default Menu;
