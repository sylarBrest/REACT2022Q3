import { Link } from 'react-router-dom';
import { RoutePropsType } from 'data/types';

export const MenuLink = ({ path, name }: RoutePropsType) => {
  return (
    <Link className="link" to={path} data-testid={`${name.replace(/\s/g, '-').toLowerCase()}-link`}>
      {name}
    </Link>
  );
};
