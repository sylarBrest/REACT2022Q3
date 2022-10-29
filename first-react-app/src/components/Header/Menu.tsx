import { ROUTE_PATHS } from 'data/constants';
import { RoutePropsType } from 'data/types';
import { MenuLink } from './MenuItem';

export const Menu = () => {
  return (
    <nav className="menu" data-testid="nav-menu">
      {ROUTE_PATHS.map((route: RoutePropsType) => (
        <MenuLink {...route} key={route.name.replace(/\s/g, '-').toLowerCase()} />
      ))}
    </nav>
  );
};
