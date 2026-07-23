
// tailwind.config.test.js

const tailwindConfig = require('./tailwind.config.js');

describe('Tailwind CSS Configuration', () => {
  test('should define Inter font family', () => {
    expect(tailwindConfig.theme.extend.fontFamily).toHaveProperty('sans');
    expect(tailwindConfig.theme.extend.fontFamily.sans).toContain('Inter');
  });

  test('should define primary and secondary color palettes', () => {
    expect(tailwindConfig.theme.extend.colors).toHaveProperty('primary');
    expect(tailwindConfig.theme.extend.colors.primary).toHaveProperty('light');
    expect(tailwindConfig.theme.extend.colors.primary).toHaveProperty('DEFAULT');
    expect(tailwindConfig.theme.extend.colors.primary).toHaveProperty('dark');

    expect(tailwindConfig.theme.extend.colors).toHaveProperty('secondary');
    expect(tailwindConfig.theme.extend.colors.secondary).toHaveProperty('light');
    expect(tailwindConfig.theme.extend.colors.secondary).toHaveProperty('DEFAULT');
    expect(tailwindConfig.theme.extend.colors.secondary).toHaveProperty('dark');
  });

  test('primary colors should have specific hex values', () => {
    expect(tailwindConfig.theme.extend.colors.primary.light).toBe('#6366F1');
    expect(tailwindConfig.theme.extend.colors.primary.DEFAULT).toBe('#4F46E5');
    expect(tailwindConfig.theme.extend.colors.primary.dark).toBe('#4338CA');
  });

  test('secondary colors should have specific hex values', () => {
    expect(tailwindConfig.theme.extend.colors.secondary.light).toBe('#FDE047');
    expect(tailwindConfig.theme.extend.colors.secondary.DEFAULT).toBe('#FACC15');
    expect(tailwindConfig.theme.extend.colors.secondary.dark).toBe('#EAB308');
  });
});
