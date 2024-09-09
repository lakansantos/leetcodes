const numbers = [1, 2, 3, 4, 3, 2, 1, 5];
// [1, 2, 3, 4, 5]

const removeDuplicateArray = (array) => {
  const result = array.reduce((acc, num) => {
    if (!acc.includes(num)) {
      acc.push(num);
    }
    return acc;
  }, []);

  return result;
};

console.log(removeDuplicateArray(numbers));
