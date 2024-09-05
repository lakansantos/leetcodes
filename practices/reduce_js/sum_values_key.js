const items = [
  { category: "fruits", value: 100 },
  { category: "vegetables", value: 80 },
  { category: "fruits", value: 150 },
  { category: "grains", value: 200 },
  { category: "vegetables", value: 120 },
];
// { fruits: 250, vegetables: 200, grains: 200 }

const calculateSum = (array) => {
  return array.reduce((acc, cur) => {
    const { category, value } = cur;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += value;
    return acc;
  }, {});
};

console.log(calculateSum(items));
