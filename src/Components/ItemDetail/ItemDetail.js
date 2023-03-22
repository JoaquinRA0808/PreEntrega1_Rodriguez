import { useEffect } from 'react';
import useFirebase from '../../hook/useFirebase';
import Item from '../Item/Item';
import './styles.css';

const ItemDetail = ({ product }) => {
  const { id } = product;
  const { products, getProducts, filterProducts, filteredProducts } = useFirebase();
  
  
  useEffect(() => {
    !id ? getProducts() : filterProducts(id);
  }, [id]);

  const renderItems = !id ? products : filteredProducts;
  const items = renderItems.map(({ id, title, description, price, image, quantity }) => {
    return (
      <Item
        key={id}
        id={id}
        title={title}
        description={description}
        price={price}
        pictureUrl={image}
        stock={quantity}
      />
    );
  });

  return <div className='container'>{items}</div>;
};

export default ItemDetail;