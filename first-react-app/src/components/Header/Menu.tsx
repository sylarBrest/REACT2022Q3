import { ROUTE_PATHS } from 'data/constants';
import { RoutePropsType } from 'data/types';
import Item from './Item';

function Menu() {
  const menuItems = ROUTE_PATHS.map((route: RoutePropsType) => (
    <Item {...route} key={route.name.replace(/\s/g, '-').toLowerCase()} />
  ));
  return (
    <nav className="menu" data-testid="nav-menu">
      {menuItems}
    </nav>
  );
}

export default Menu;
