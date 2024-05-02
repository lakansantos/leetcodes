const fibonacci = (starting, length) => {
  if (starting.length === 1) return starting;
  let rightIndex = starting.length - 1; // 1 arr[rightindex] = 2
  let leftIndex = rightIndex - 1;

  let total = 0;
  while (starting.length !== length) {
    const leftValue = starting[leftIndex];
    const rightValue = starting[rightIndex];

    total = leftValue + rightValue;

    starting.push(total);
    leftIndex++;
    rightIndex++;
  }

  return starting;
};

console.log(fibonacci([1], 10));

// 1 2 = 3
// 1 2 3 = 5
// 1 2 3 5 = 8
