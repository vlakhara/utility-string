const stringUtils = require('./index');

describe('String Utilities', () => {
  test('isString should return true for strings', () => {
    expect(stringUtils.isString("test")).toBe(true);
    expect(stringUtils.isString(123)).toBe(false);
  });

  test('isEmpty should return true for empty strings', () => {
    expect(stringUtils.isEmpty("")).toBe(true);
    expect(stringUtils.isEmpty("test")).toBe(false);
  });

  test('titleCase should convert to title case', () => {
    expect(stringUtils.titleCase("hello world")).toBe("Hello World");
  });

  test('capitalize should capitalize the first letter', () => {
    expect(stringUtils.capitalize("hello world")).toBe("Hello world");
  });

  test('zigZag should alternate case', () => {
    expect(stringUtils.zigZag("hello")).toBe("hElLo");
  });

  test('reverse should reverse the string', () => {
    expect(stringUtils.reverse("hello")).toBe("olleh");
  });

  test('camelCase should convert to camel case', () => {
    expect(stringUtils.camelCase("hello world")).toBe("helloWorld");
  });

  test('snakeCase should convert to snake case', () => {
    expect(stringUtils.snakeCase("Hello World")).toBe("hello_world");
  });

  test('kebabCase should convert to kebab case', () => {
    expect(stringUtils.kebabCase("Hello World")).toBe("hello-world");
  });

  test('pascalCase should convert to Pascal case', () => {
    expect(stringUtils.pascalCase("hello world")).toBe("HelloWorld");
  });

  test('characterOccurrence should count occurrences of a character', () => {
    expect(stringUtils.characterOccurrence("hello", "l")).toBe(2);
    expect(stringUtils.characterOccurrence("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
  });

  test('Sort should sort the characters of string', () => {
    expect(stringUtils.sort("bcda")).toBe("abcd")
  })
});
