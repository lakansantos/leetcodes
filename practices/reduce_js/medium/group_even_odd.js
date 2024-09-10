const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// output
// { even: [2, 4, 6, 8], odd: [1, 3, 5, 7] }

const groupEvenOdd = (numbers) => {
  return numbers.reduce(
    (acc, cur) => {
      if (cur % 2 === 0) {
        acc.even.push(cur);
      } else {
        acc.odd.push(cur);
      }

      return acc;
    },
    { odd: [], even: [] }
  );
};
