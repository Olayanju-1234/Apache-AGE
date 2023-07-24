// Let's say we have an array of first 45 numbers with one missing number. Need to find a missing integer from the list

const findMissingNumber = (arr) => {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);

    return expectedSum - actualSum;
};

const numbers = [1, 2, 3, 4, /* Missing number here */ 6, 7, 8, /* ... */, 44, 45];
const missingNumber = findMissingNumber(numbers);
console.log(`The missing number is: ${missingNumber}`);
