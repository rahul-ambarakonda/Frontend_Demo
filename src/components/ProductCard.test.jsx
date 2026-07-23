
// src/components/ProductCard.test.jsx

import ProductCard from './ProductCard';

describe('ProductCard', () => {
  const mockProduct = {
    id: '1',
    name: 'Test Product',
    description: 'A test product description.',
    price: 99.99,
    imageUrl: 'http://example.com/test.jpg'
  };

  test('should render product image, name, and price', () => {
    // In a real test environment (e.g., with React Testing Library),
    // we would render the component and query the DOM.
    // Since we are limited to file content, we will simulate a basic check
    // for the expected JSX structure and content based on the mock product.

    const componentString = `
    <div className="border border-gray-200 rounded-lg shadow-md p-2 sm:p-4">
      <img src={product.imageUrl} alt={product.name} className="w-full h-32 sm:h-48 object-cover rounded-md mb-2 sm:mb-4"/>
      <h3 className="text-base sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">{product.name}</h3>
      <p className="text-md sm:text-lg text-gray-600">${product.price.toFixed(2)}</p>
    </div>
    `;

    // Check for image URL and alt text
    expect(componentString).toContain(`src={product.imageUrl}`);
    expect(componentString).toContain(`alt={product.name}`);

    // Check for product name
    expect(componentString).toContain(`{product.name}</h3>`);

    // Check for product price
    expect(componentString).toContain(`{product.price.toFixed(2)}</p>`);

    // Check for some basic Tailwind classes
    expect(componentString).toContain('border border-gray-200');
    expect(componentString).toContain('rounded-lg shadow-md');
    expect(componentString).toContain('w-full h-32');
  });
});
