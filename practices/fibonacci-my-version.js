const fibonacci = (starting, length) => {
  if (starting.length === 1) return starting;
  let rightIndex = starting.length - 1; // 1 arr[rightindex] = 2
  let leftIndex = rightIndex - 1;

  let total = 0;

  if (starting.length >= length) return starting;
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

console.log(fibonacci([3, 3], 1)); // return the same
console.log(fibonacci([3, 3], 2)); // return the same
console.log(fibonacci([1, 7], 3)); // [ 1, 7, 8 ]
console.log(fibonacci([1, 1], 5)); // [ 1, 1, 2, 3, 5 ]

// 1 2 = 3
// 1 2 3 = 5
// 1 2 3 5 = 8
