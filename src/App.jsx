import React from 'react';
import { MOCK_PRODUCTS } from './data/products';
import ProductGrid from './components/ProductGrid';
import './App.css';

function App() {
  return (
    <>
      <div className="text-center p-4">
        <h1 className="text-4xl font-bold text-gray-800">Auto Parts Inc.</h1>
      </div>
      <ProductGrid products={MOCK_PRODUCTS} />
    </>
  );
}

export default App;
