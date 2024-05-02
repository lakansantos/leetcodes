const fib = (n) => {
  let sumPrevious = 0;
  let sum = 0;
  if (n <= 1) return sum;

  const array = [0, 1];

  let rightIndex = array.length - 1;
  let leftIndex = rightIndex - 1;
  while (array.length !== n) {
    sumPrevious = array[leftIndex] + array[rightIndex];

    array.push(sumPrevious);

    rightIndex++;
    leftIndex++;
  }

  sum = array[leftIndex] + array[rightIndex];

  return sum;
};

console.log(fib(4));

// 0 1, 1  = 2
// 0 1  1 2 = 4
