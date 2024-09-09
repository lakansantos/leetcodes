const numbers = [1, -2, 3, 4, -4, 5, -6, 0, 0];
// output -  { positive: 3, negative: 3 }

const countPositiveNegative = (array) =>
  array.reduce(
    (acc, cur) => {
      if (cur > 0) {
        acc["positive"] += 1;
      } else if (cur < 0) {
        acc["negative"] += 1;
      } else if (cur === 0) {
        acc["zero"] += 1;
      }
      return acc;
    },
    { positive: 0, negative: 0, zero: 0 }
  );

console.log(countPositiveNegative(numbers));
