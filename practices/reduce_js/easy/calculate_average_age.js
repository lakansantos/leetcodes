const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// outcome
// 30 (Average of 25, 30, 35)

const calculateAverageAge = (array) => {
  return (
    array.reduce((acc, { age }) => {
      return (acc += age);
    }, 0) / array.length
  );
};

console.log(calculateAverageAge(people));
