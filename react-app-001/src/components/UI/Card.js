import React from 'react';
import "./Card.css"

const Card = (props) => {
    let classNames = `card ${props.className}`;
  return (
    <div className={classNames}>{props.children}</div>
  )
}

export default Card