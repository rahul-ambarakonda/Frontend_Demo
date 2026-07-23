import React from 'react';
import { MOCK_PRODUCTS } from './data/products';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Header from './components/Header'; // Import the Header component

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header /> {/* Render the Header component at the top */}
      <main className="flex-grow container mx-auto p-4">
        <ProductGrid products={MOCK_PRODUCTS} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
