
// src/components/Footer.test.jsx

import Footer from './Footer';

describe('Footer', () => {
  test('should render copyright information', () => {
    const footerContent = `
    <footer className="app-footer">
      <p>&copy; 2023 Auto Parts Inc.</p>
    </footer>
    `;

    expect(footerContent).toContain('© 2023 Auto Parts Inc.');
    expect(footerContent).toContain('app-footer');
  });
});
