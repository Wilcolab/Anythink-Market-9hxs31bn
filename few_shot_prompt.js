function toCamelCase(str) {
    return str
        .replace(/[_\-\s]+/g, ' ') // Replace separators with space
        .trim()
        .split(' ')
        .map((word, idx) => {
            word = word.toLowerCase();
            if (idx === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Examples
console.log(toCamelCase('first name'));      // firstName
console.log(toCamelCase('user_id'));         // userId
console.log(toCamelCase('SCREEN_NAME'));     // screenName
console.log(toCamelCase('mobile-number'));   // mobileNumber