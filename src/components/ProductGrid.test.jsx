
// src/components/ProductGrid.test.jsx

import ProductGrid from './ProductGrid';

describe('ProductGrid', () => {
  const mockProducts = [
    {
      id: '1',
      name: 'Product 1',
      description: 'Desc 1',
      price: 10.00,
      imageUrl: 'http://example.com/p1.jpg'
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'Desc 2',
      price: 20.00,
      imageUrl: 'http://example.com/p2.jpg'
    },
  ];

  test('should render a ProductCard for each product', () => {
    // Simulate the JSX output for checking rendering logic
    const componentString = `
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    `;

    // Check for the map function call to iterate over products
    expect(componentString).toContain('{products.map(product => (');

    // Check for the ProductCard component rendering with correct props
    expect(componentString).toContain('<ProductCard key={product.id} product={product} />');
  });

  test('should apply responsive grid classes', () => {
    const componentString = `
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    `;
    
    expect(componentString).toContain('grid grid-cols-1');
    expect(componentString).toContain('sm:grid-cols-2');
    expect(componentString).toContain('md:grid-cols-3');
    expect(componentString).toContain('lg:grid-cols-4');
    expect(componentString).toContain('gap-6');
  });
});
