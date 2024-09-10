const numbers = [10, 2, 3, 8, 4, 6];

// output
// 8 (10 - 2)

// this can be easily solved by using Math.max and Math.min
const nonReduceFindDiffMinMax = (array) => {
  return Math.max(...array) - Math.min(...array);
};

// initial

const initialFindDifferenceMinMax = (array) => {
  const [max, min] = array.reduce(
    ([max, min], cur) => {
      const maximum = cur > max ? cur : max;
      const minimum = cur < min ? cur : min;
      return [maximum, minimum];
    },
    [-Infinity, Infinity]
  );

  return max - min;
};

// shorter
const shorterFindDifferenceMinMax = (array) => {
  const [max, min] = array.reduce(
    ([max, min], cur) => [cur > max ? cur : max, cur < min ? cur : min],
    [-Infinity, Infinity]
  );

  return max - min;
};

console.log(shorterFindDifferenceMinMax(numbers));
