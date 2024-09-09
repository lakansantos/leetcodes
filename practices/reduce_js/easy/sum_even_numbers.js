const numbers = [1, 2, 3, 4, 5, 6];
// expected
// 12 (2 + 4 + 6)

const sumEvenNumbers = (array) =>
  array.reduce((acc, cur) => (cur % 2 === 0 ? (acc += cur) : acc), 0);

console.log(sumEvenNumbers(numbers));
