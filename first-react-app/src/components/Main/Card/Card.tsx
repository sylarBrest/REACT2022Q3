import React from 'react';
import { CardPropsType } from 'data/types';
import './Card.css';

const Card = (props: CardPropsType) => {
  const { id, webformatURL } = props;

  return (
    <div className="card" onClick={() => props.getPhotoId(id)} data-testid={`card-${id}`}>
      <img className="card-image" src={webformatURL} alt="Result Image" />
    </div>
  );
};

export default Card;
