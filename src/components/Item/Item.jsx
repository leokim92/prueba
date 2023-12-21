import React from 'react';

const Item = ({id, name, price, img}) => {
  return (
    <div>
        <img src={img} alt={name} />
        <h3>Name: {name} </h3>
        <p>Price:  {price}</p>
        <p>ID: {id}</p>
        <button> View Detail</button>
    </div>
  )
}

export default Item