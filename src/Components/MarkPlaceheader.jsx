import React from 'react';
import './MarketplaceHeader.css';
import './Categories.css';
import Categories from './Categories';

const MarketplaceHeader = ({setSelectedCategory}) => {
  return (
    <header className="marketplace-header">
      <h1>Discover the Best E-commerce Products and Services</h1>
      <p>Your one-stop shop for all your online business needs.</p>
      <input type="search" placeholder="Search for products or services" />
      <Categories setSelectedCategory = {setSelectedCategory}></Categories>
    </header>
  );
};

export default MarketplaceHeader;
