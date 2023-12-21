import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProducts, getProductByCat } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);

  const {idCategory} = useParams();

  useEffect(() => {
    const functionProduct = idCategory ? getProductByCat : getProducts;

    functionProduct(idCategory)
    .then(answer => setProducts(answer))
  }, [idCategory])
  
  return (
    <div>
        <h2>{greeting}</h2>
        <h2>My products</h2>
        <ItemList products = {products} />
    </div>
  )
}

export default ItemListContainer