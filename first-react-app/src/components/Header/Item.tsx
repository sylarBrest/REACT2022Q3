import { Link } from 'react-router-dom';
import { TItemProps } from 'types';

function Item(props: TItemProps) {
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
