// Given a string, return:

// total number of words
// longest word
// character frequency
// whether the text is a palindrome

// Ignore:

// spaces
// punctuation
// uppercase/lowercase when checking characters.

function analyzeText(text) {

    // trim() removes extra spaces at the beginning and end of the string. split(/\s+/) splits the string into an array of words using one or more whitespace characters as the delimiter.
    const words = text.trim().split(/\s+/); 

    const totalWords = words.length;

    const longestWord = words.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, ""); // "" is initial for safety only becasue we assume what if theres no input it could be error, so we use "" as initial value to avoid error and the code will run.
            // could be use if not object.
    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, ""); // toLowerCase() converts the string to lowercase, and replace(/[^a-z0-9]/g, "") removes all non-alphanumeric characters (punctuation, spaces, etc.) from the string.

    const charFrequency = {};
    for (const char of cleanedText) {
        charFrequency[char] = (charFrequency[char] || 0) + 1; // || is a logical OR operator. Simply put, if the left side is truthy, it will return the left side; if the left side is falsy, it will return the right side. In this case, if charFrequency[char] is undefined (falsy), it will return 0, and then we add 1 to it.
    }

    // Object.entries converts the object into array to sort the value into descending order and slice it to get the top 3 characters with the highest frequency.
    const bonus = Object.entries(charFrequency).sort((a, b) => b[1] - a[1]).slice(0,3); // b[1] - a[1]). is a counting in array start with 0. Because the charFrequency is have key annd value, so the key is 0 and the value is 1. So we use b[1] - a[1] to sort the value in descending order.

    const reversed = cleanedText.split("").reverse().join(""); // 

    const isPalindrome = cleanedText === reversed;

    return {
        totalWords,
        longestWord,
        charFrequency,
        isPalindrome,
        bonus
    };
}

// test cases
const exampleText = "A man, a plan, a canal: Panama";
console.log(analyzeText(exampleText));

const anotherText = "kamote ka, boi";
console.log(analyzeText(anotherText));