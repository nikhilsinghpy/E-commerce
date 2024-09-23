// src/components/ProductCard.js
import React from 'react';
import './Products.css';

const ProductCard = ({ image, title, price, rating, reviews }) => {
  return (
    <>
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h5 className="product-title">{title}</h5>
        <div className="product-rating">
          <span>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>
          <span className="product-reviews">{reviews} reviews</span>
        </div>
        <div className="product-price">${price}</div>
      </div>
      <button className="product-button">Add to Cart</button>
    </div>
    </>
  );
};

export default ProductCard;
