import { Link } from 'react-router-dom';
import { RoutePropsType } from 'data/types';

function Item(props: RoutePropsType) {
  return (
    <Link
      className="link"
      to={props.path}
      data-testid={`${props.name.replace(/\s/g, '-').toLowerCase()}-link`}
    >
      {props.name}
    </Link>
  );
}

export default Item;
