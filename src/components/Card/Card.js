import React from 'react';
import './Card.css'

const Card = (props) => {
  const { products } = props;

  return (
    <div>
      {
        products.map(product => (
          <div className="card" key={product.id}>
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
            </div>
            <div>
              <img src={product.image} alt={product.title} />
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Card;