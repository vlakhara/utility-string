/**
 * Checks if the provided value is a string.
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns true if value is a string, otherwise false.
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * Checks if the provided string is empty.
 * @param {string} value - The string to check.
 * @returns {boolean} - Returns true if the string is empty, otherwise false.
 */
function isEmpty(value) {
  if (!isString(value)) {
    throw new TypeError("Expected a string");
  }
  return value === '';
}

/**
 * Converts a string to title case.
 * @param {string} value - The string to convert.
 * @returns {string} - The title-cased string.
 */
function titleCase(value) {
  if (!isString(value)) {
    throw new TypeError("Expected a string");
  }
  const arr = value.split(' ');
  return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} value - The string to capitalize.
 * @returns {string} - The capitalized string.
 */
function capitalize(value) {
  if (!isString(value)) {
    throw new TypeError("Expected a string");
  }
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * Alternates the case of characters in a string.
 * @param {string} value - The string to transform.
 * @returns {string} - The transformed string.
 */
function zigZag(value) {
  if (!isString(value)) {
    throw new TypeError("Expected a string");
  }
  const arr = value.split('');
  return arr.map((char, index) => index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()).join('');
}

/**
 * Reverses the characters in a string.
 * @param {string} value - The string to reverse.
 * @returns {string} - The reversed string.
 */
function reverse(value) {
  if (!isString(value)) {
    throw new TypeError("Expected a string");
  }
  return value.split('').reverse().join('');
}

/**
 * Converts a string to camel case.
 * @param {string} value - The string to convert.
 * @returns {string} - The camel-cased string.
 */
function camelCase(value) {
  if (!isString(value)) {
    throw new TypeError("Expected a string");
  }
  const arr = value.split(' ');
  return arr[0].toLowerCase() + arr.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

/**
 * Converts a string to snake case.
 * @param {string} value - The string to convert.
 * @returns {string} - The snake-cased string.
 */
function snakeCase(value) {
  if (!isString(value)) {
    throw new TypeError("Expected a string");
  }
  const arr = value.split(' ');
  return arr.map(word => word.toLowerCase()).join('_');
}

/**
 * Converts a string to kebab case.
 * @param {string} value - The string to convert.
 * @returns {string} - The kebab-cased string.
 */
function kebabCase(value) {
  if (!isString(value)) {
    throw new TypeError("Expected a string");
  }
  const arr = value.split(' ');
  return arr.map(word => word.toLowerCase()).join('-');
}

/**
 * Converts a string to Pascal case.
 * @param {string} value - The string to convert.
 * @returns {string} - The Pascal-cased string.
 */
function pascalCase(value) {
  if (!isString(value)) {
    throw new TypeError("Expected a string");
  }
  const arr = value.split(' ');
  return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

/**
 * Counts occurrences of a specified character in a string.
 * @param {string} value - The string to check.
 * @param {string} [character] - The character to count. If omitted, counts all characters.
 * @returns {number|Object} - Returns the count of the specified character or an object with character counts.
 */
function characterOccurrence(value = "", character) {
  if (!isString(value)) {
    throw new TypeError("Expected a string");
  }

  if (character) {
    if (!isString(character) || character.length !== 1) {
      throw new TypeError("Character must be a single character string");
    }
    return value.split('').filter(char => char === character).length;
  }

  const obj = {};
  value.split('').forEach(char => {
    obj[char] = (obj[char] || 0) + 1;
  });

  return obj;
}

function sort(value) {
  if (!isString(value)) {
    throw new TypeError("Expected a string");
  }
  return value.split('').sort().join('');
}

// Exporting all functions
module.exports = {
  isString,
  isEmpty,
  titleCase,
  capitalize,
  zigZag,
  reverse,
  camelCase,
  snakeCase,
  kebabCase,
  pascalCase,
  characterOccurrence,
  sort
};
