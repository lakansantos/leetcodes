const nestedArray = [[1, 2], [3, 4], [5, [6, 7]], [8]];
// result - [1, 2, 3, 4, 5, 6, 7, 8]

const flattenArray = (nestedArray) => {
  const result = nestedArray.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      return acc.concat(flattenArray(cur));
    } else {
      return acc.concat(cur);
    }
  }, []);

  return result;
};

console.log(flattenArray(nestedArray));
