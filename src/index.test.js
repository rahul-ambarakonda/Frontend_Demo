
// src/index.test.js

describe('src/index.css', () => {
  const cssContent = `
@tailwind base;
@tailwind components;
@tailwind utilities;
`;

  test('should import Tailwind CSS directives', () => {
    expect(cssContent).toContain('@tailwind base;');
    expect(cssContent).toContain('@tailwind components;');
    expect(cssContent).toContain('@tailwind utilities;');
  });
});
