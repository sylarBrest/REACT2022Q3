import React from 'react';
import { TTitleProps } from 'types';

const Title = (props: TTitleProps) => {
  return <h1 className="title">{props.pageTitle}</h1>;
};

export default Title;
