import React from 'react'

const ItemDetail = ({id, name, price, img}) => {
  return (
    <div>
        <h2>Name: {name}</h2>
        <p>Price: {price}</p>
        <p>ID: {id}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia dolores molestiae sunt sit? Corrupti sequi officia, perspiciatis, voluptate nulla excepturi sed placeat error omnis, iusto qui! Accusantium assumenda numquam beatae!</p>
        <img src={img} alt={name} />
    </div>
  )
}

export default ItemDetail