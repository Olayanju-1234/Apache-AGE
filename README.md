# Fibonacci Sequence with Dynamic Programming

This project implements a Fibonacci sequence using Dynamic Programming with the ability to perform arithmetic operations (+, -, *, /) and conditions.

## Development Environment

- Node.js: v14.x or above
- npm: v6.x or above

## How to Run

1. Clone or download this repository to your local machine.

2. Open a terminal or command prompt and navigate to the project directory.

3. Install the required dependencies using npm:

`npm install`

4. Run the JavaScript program:

`node fibonacci.js`

## Usage

Modify the `main()` function in the `fibonacci.js` file to change the arithmetic expressions and conditions and calculate different results.

In the `main()` section of `fibonacci.js`, use the `makeFunc` function to define arithmetic expressions and conditions. The `makeFunc` function takes two arguments, the first argument being the type of operation (e.g., "ADD", "MUL", "SUB"), and the second and third arguments being the operands.

For example, to create an addition operation of 10 and 6:

```javascript
const add = makeFunc("ADD")(10, 6);

To create a multiplication operation of 5 and 4:
const mul = makeFunc("MUL")(5, 4);

To create a subtraction operation using the previously defined mul and add operations:
const sub = makeFunc("SUB")(mul, add);

To create a Fibonacci sequence calculation using the sub operation:
const fibo = makeFunc("FIBO")(sub, null);
```

Save the changes to fibonacci.js, and run the program again using the command:

`node fibonacci.js`