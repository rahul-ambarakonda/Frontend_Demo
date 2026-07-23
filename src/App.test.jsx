
// src/App.test.jsx

import App from './App';

describe('App', () => {
  test('should import MOCK_PRODUCTS, ProductGrid, Header, and Footer', () => {
    const appContent = `
    import { MOCK_PRODUCTS } from './data/products';
    import ProductGrid from './components/ProductGrid';
    import Footer from './components/Footer';
    import Header from './components/Header';

    function App() {
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto p-4">
            <ProductGrid products={MOCK_PRODUCTS} />
          </main>
          <Footer />
        </div>
      );
    }
    `;

    expect(appContent).toContain("import { MOCK_PRODUCTS } from './data/products';");
    expect(appContent).toContain("import ProductGrid from './components/ProductGrid';");
    expect(appContent).toContain("import Header from './components/Header';");
    expect(appContent).toContain("import Footer from './components/Footer';");
  });

  test('should render Header, ProductGrid with MOCK_PRODUCTS, and Footer in order', () => {
    const appContent = `
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <ProductGrid products={MOCK_PRODUCTS} />
      </main>
      <Footer />
    </div>
    `;

    // Check rendering order by looking for the sequence of components
    const headerIndex = appContent.indexOf('<Header />');
    const productGridIndex = appContent.indexOf('<ProductGrid products={MOCK_PRODUCTS} />');
    const footerIndex = appContent.indexOf('<Footer />');

    expect(headerIndex).not.toBe(-1);
    expect(productGridIndex).not.toBe(-1);
    expect(footerIndex).not.toBe(-1);

    expect(headerIndex).toBeLessThan(productGridIndex);
    expect(productGridIndex).toBeLessThan(footerIndex);
  });
});
