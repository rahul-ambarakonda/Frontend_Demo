import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-2 sm:p-4">
      <img src={product.imageUrl} alt={product.name} className="w-full h-32 sm:h-48 object-cover rounded-md mb-2 sm:mb-4"/>
      <h3 className="text-base sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">{product.name}</h3>
      <p className="text-md sm:text-lg text-gray-600">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
