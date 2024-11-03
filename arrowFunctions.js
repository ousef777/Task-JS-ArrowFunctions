/**
 * Rewrite the following `greet` function as an arrow function
 */
greet = (name) => `Hello ${name}`;


/**
 * sum(a, b):
 * - revieces two numbers
 * - returns their sum
 * - write it as an arrow function
 */
sum = (a, b) => a + b;



/**
 * square(n):
 * - receives a number n
 * - returns the square of the number
 * - write it as an arrow function
 *
 * e.g.
 * square(4) -> 16
 * sqaure(10) -> 100
 */
square = (n) => n ** 2;

/**
 * 🌶️🌶️
 * sqaures(numbers):
 * - receives an array numbers
 * - returns an array of the squares of the numbers
 * - write it as an arrow function
 *
 * e.g.
 * squares([1, 2, 3]) -> [1, 4, 9]
 */
squares = (numbers) => numbers.map((value, index, array) => value ** 2);

//console.log([1, 2, 3] + ", " + squares([1, 2, 3]));

module.exports = {
  greet,
  sum,
  square,
  squares,
};
