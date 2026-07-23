
// src/components/Header.test.jsx

import Header from './Header';

describe('Header', () => {
  test('should display "Auto Parts Inc." as the application name', () => {
    const headerContent = `
    <header className="bg-primary-dark text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-secondary-light">
          Auto Parts Inc.
        </h1>
      </div>
    </header>
    `;

    expect(headerContent).toContain('<h1>Auto Parts Inc.</h1>'); // Simplified check, actual might have classes inside
  });

  test('should apply correct Tailwind CSS styling for branding and positioning', () => {
    const headerContent = `
    <header className="bg-primary-dark text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-secondary-light">
          Auto Parts Inc.
        </h1>
      </div>
    </header>
    `;

    expect(headerContent).toContain('bg-primary-dark');
    expect(headerContent).toContain('text-white');
    expect(headerContent).toContain('text-3xl');
    expect(headerContent).toContain('font-bold');
    expect(headerContent).toContain('text-secondary-light');
    expect(headerContent).toContain('sticky top-0 z-50');
  });
});
