const numbers = [5, 12, 3, 19, 6, 8, 2];
// output
// { smallest: 2, largest: 19 }

// initial thought
// using of math.min and math.max
const initial = (array) => {
  return array.reduce(
    (acc, cur) => {
      const smallest = Math.min(cur, acc.smallest);
      const largest = Math.max(cur, acc.largest);

      acc["largest"] = largest;
      acc["smallest"] = smallest;
      return acc;
    },
    { smallest: numbers[0], largest: 0 }
  );
};

// using Infinity to replace to be replaced by numbers
const better = (array) =>
  array.reduce(
    (acc, cur) => {
      if (cur > acc.largest) {
        acc.largest = cur;
      }
      if (cur < acc.smallest) {
        acc.smallest = cur;
      }
      return acc;
    },
    { smallest: Infinity, largest: -Infinity }
  );
