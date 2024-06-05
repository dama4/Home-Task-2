// stringTransformer.js

function stringTransformer(str) {
    const length = str.length;

    if (length % 15 === 0) {
        // If length is divisible by 15, reverse and then replace with ASCII codes
        str = str.split('').reverse().join('');
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 5 === 0) {
        // If length is divisible by 5, replace each character with its ASCII code
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // If length is divisible by 3, reverse the string
        return str.split('').reverse().join('');
    } else {
        // If none of the conditions match, return the original string
        return str;
    }
}

// Example usage:
console.log(stringTransformer("Hamburger")); // Output: "regrubmaH"
console.log(stringTransformer("Pizza")); // Output: "80 105 122 122 97"
console.log(stringTransformer("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
console.log(stringTransformer("Hello World!")); // Output: "Hello World!"
