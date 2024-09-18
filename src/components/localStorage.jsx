// src/components/FoodAbout.js or ProductDesc.js
import React from 'react';

const FoodAbout = () => {
  const handleAddToWishlist = (item) => {
    // Retrieve the current wishlist from localStorage
    const currentWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Add the new item if it doesn't already exist
    if (!currentWishlist.find(wishlistItem => wishlistItem.id === item.id)) {
      currentWishlist.push(item);
      localStorage.setItem('wishlist', JSON.stringify(currentWishlist));
    }
  };

  const item = { id: 'unique-item-id', name: 'Sample Item' }; // Example item

  return (
    <div>
      <h1>{item.name}</h1>
      <button onClick={() => handleAddToWishlist(item)}>
        Add to Wishlist
      </button>
    </div>
  );
};

export default FoodAbout;
