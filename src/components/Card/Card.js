import React from 'react';

const Card = (props) => {
  const { products } = props;

  return (
    <div>
      {
        products.map(product => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <img src={product.image} alt={product.title} />
          </div>
        ))
      }
    </div>
  );
};

export default Card;