/**
 * Converts a string to kebab-case.
 * Handles camelCase, PascalCase, snake_case, space-separated, and acronyms.
 * Trims leading/trailing whitespace or symbols, collapses multiple delimiters, and returns empty string for invalid input.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The kebab-case version of the input string.
 * @throws {TypeError} If the input is not a string.
 */
function toKebabCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Trim leading/trailing whitespace and symbols
    str = str.trim().replace(/^[_\-\s]+|[_\-\s]+$/g, '');

    // Return empty string if input is empty or contains no alphanumeric characters
    if (!str || !/[a-zA-Z0-9]/.test(str)) {
        return '';
    }

    // Replace all delimiters (spaces, underscores, hyphens) with a single space
    str = str.replace(/[\s_\-]+/g, ' ');

    // Split words using regex:
    // - Between lowercase and uppercase (for camelCase/PascalCase)
    // - Between acronym and normal word (e.g., HTTPResponse)
    // - Between numbers and letters
    const words = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]+|[0-9]+/g);

    if (!words) {
        return '';
    }

    return words.map(w => w.toLowerCase()).join('-');
}

// Test cases
console.assert(toKebabCase('already-kebab-case') === 'already-kebab-case', 'Already-Kebab-Case');
console.assert(toKebabCase('camelCaseToKebab') === 'camel-case-to-kebab', 'camelCaseToKebab');
console.assert(toKebabCase('PascalCaseToKebab') === 'pascal-case-to-kebab', 'PascalCaseToKebab');
console.assert(toKebabCase('snake_case_to_kebab') === 'snake-case-to-kebab', 'snake_case_to_kebab');
console.assert(toKebabCase('string with 123 numbers') === 'string-with-123-numbers', 'string with 123 numbers');
console.assert(toKebabCase('Multiple   Spaces  and __Underscores__') === 'multiple-spaces-and-underscores', 'Multiple Spaces and Underscores');
console.assert(toKebabCase('getHTTPResponse') === 'get-http-response', 'Acronym handling');
console.assert(toKebabCase('foo---bar') === 'foo-bar', 'Multiple hyphens');
console.assert(toKebabCase('  _foo_  ') === 'foo', 'Trim symbols');
console.assert(toKebabCase('') === '', 'Empty string');
console.assert(toKebabCase('---___   ') === '', 'No alphanumeric');
try {
    toKebabCase(123);
    console.assert(false, 'Should throw TypeError for non-string input');
} catch (e) {
    console.assert(e instanceof TypeError, 'Throws TypeError for non-string input');
}