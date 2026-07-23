import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-4 m-2 w-64">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4"/>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-lg text-gray-600">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
