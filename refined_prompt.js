/**
 * Converts a string from various formats (snake_case, kebab-case, PascalCase, or space-separated) into camelCase.
 *
 * Handles multiple word separators, including spaces, underscores, hyphens, and transitions from lowercase to uppercase (PascalCase).
 * Skips non-letter characters except for valid separators, and throws descriptive errors for invalid inputs.
 *
 * @param {string} input - The string to convert. Can be in snake_case, kebab-case, PascalCase, or space-separated format.
 * @returns {string} The camelCase version of the input string.
 * @throws {Error} If input is not a string or contains no valid characters or words.
 *
 * @example
 * toCamelCase('snake_case-example PascalCase test-string');
 * // Returns: "snakeCaseExamplePascalCaseTestString"
 */

/**
 * Converts a string from various formats (snake_case, kebab-case, PascalCase, or space-separated) into dot.case.
 *
 * Handles multiple word separators, including spaces, underscores, hyphens, and transitions from lowercase to uppercase (PascalCase).
 * Skips non-letter characters except for valid separators, and throws descriptive errors for invalid inputs.
 *
 * @param {string} input - The string to convert. Can be in snake_case, kebab-case, PascalCase, or space-separated format.
 * @returns {string} The dot.case version of the input string.
 * @throws {Error} If input is not a string or contains no valid characters or words.
 *
 * @example
 * toDotCase('snake_case-example PascalCase test-string');
 * // Returns: "snake.case.example.pascal.case.test.string"
 */
//  * Converts any string (snake_case, kebab-case, PascalCase, or space-separated) into camelCase.
//  * Handles multiple word separators, skips non-letter characters, and throws descriptive errors for invalid inputs.
//  * @param input - The string to convert.
//  * @returns The camelCase version of the input string.
//  * @throws Error if input is not a string or is invalid.
//  */
function toCamelCase(input: string): string {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string.');
    }

    // Remove all non-letter and non-separator characters, except spaces, underscores, and hyphens
    const cleaned = input.replace(/[^a-zA-Z0-9_\-\s]/g, '');

    // Edge case: empty string after cleaning
    if (cleaned.trim().length === 0) {
        throw new Error('Input string contains no valid characters.');
    }

    // Split by any separator: space, underscore, hyphen, or transition from lower to upper (PascalCase)
    const words = cleaned
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Split PascalCase
        .split(/[\s_\-]+/) // Split by space, underscore, hyphen
        .filter(Boolean); // Remove empty strings

    if (words.length === 0) {
        throw new Error('Input string contains no valid words.');
    }

    // Lowercase first word, capitalize subsequent words
    const camelCase = words
        .map((word, idx) =>
            idx === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');

    return camelCase;
}

// Example usage:
// console.log(toCamelCase('snake_case-example PascalCase test-string'));
// Output: "snakeCaseExamplePascalCaseTestString"



/**
 * Converts any string (snake_case, kebab-case, PascalCase, or space-separated) into dot.case.
 * Handles multiple word separators and skips non-letter characters.
 * @param input - The string to convert.
 * @returns The dot.case version of the input string.
 * @throws Error if input is not a string or is invalid.
 */
function toDotCase(input: string): string {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string.');
    }

    // Remove all non-letter and non-separator characters, except spaces, underscores, and hyphens
    const cleaned = input.replace(/[^a-zA-Z0-9_\-\s]/g, '');

    // Edge case: empty string after cleaning
    if (cleaned.trim().length === 0) {
        throw new Error('Input string contains no valid characters.');
    }

    // Split by any separator: space, underscore, hyphen, or transition from lower to upper (PascalCase)
    const words = cleaned
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Split PascalCase
        .split(/[\s_\-]+/) // Split by space, underscore, hyphen
        .filter(Boolean); // Remove empty strings

    if (words.length === 0) {
        throw new Error('Input string contains no valid words.');
    }

    // Lowercase all words and join with dot
    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage:
// console.log(toDotCase('snake_case-example PascalCase test-string'));
// Output: "snake.case.example.pascal.case.test.string"

