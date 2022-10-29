import { Link } from 'react-router-dom';
import { RoutePropsType } from 'data/types';

export const MenuLink = (props: RoutePropsType) => {
  return (
    <Link
      className="link"
      to={props.path}
      data-testid={`${props.name.replace(/\s/g, '-').toLowerCase()}-link`}
    >
      {props.name}
    </Link>
  );
};
