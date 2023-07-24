// Write a function that will take input from the user and check if it is palindrome, if the word is not palindrome then return it
// in the reverse order. For example "hello" is not a palindrome, it should return "olleh“

const checkPalindromeOrReverse = (input) => {
    const isPalindrome = (str) => str === str.split('').reverse().join('');

    if (isPalindrome(input)) {
        return `${input} is a palindrome.`;
    } else {
        const reversed = input.split('').reverse().join('');
        return `Not a palindrome. Reversed: ${reversed}`;
    }
};

const userInput1 = "hello"
const userInput2 = "racecar"
const userInput3 = "madam"
const result = checkPalindromeOrReverse(userInput1);
const result2 = checkPalindromeOrReverse(userInput2);
const result3 = checkPalindromeOrReverse(userInput3);
console.log(result);
console.log(result2);
console.log(result3);


