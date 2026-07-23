
// src/data/products.test.js

import { MOCK_PRODUCTS } from './products';

describe('MOCK_PRODUCTS', () => {
  test('should be an array', () => {
    expect(Array.isArray(MOCK_PRODUCTS)).toBe(true);
  });

  test('should contain at least 5 products', () => {
    expect(MOCK_PRODUCTS.length).toBeGreaterThanOrEqual(5);
  });

  test('each product should have the correct structure', () => {
    MOCK_PRODUCTS.forEach(product => {
      expect(product).toHaveProperty('id');
      expect(typeof product.id).toBe('string');
      expect(product).toHaveProperty('name');
      expect(typeof product.name).toBe('string');
      expect(product).toHaveProperty('description');
      expect(typeof product.description).toBe('string');
      expect(product).toHaveProperty('price');
      expect(typeof product.price).toBe('number');
      expect(product).toHaveProperty('imageUrl');
      expect(typeof product.imageUrl).toBe('string');
    });
  });

  test('product prices should be positive numbers', () => {
    MOCK_PRODUCTS.forEach(product => {
      expect(product.price).toBeGreaterThan(0);
    });
  });
});
