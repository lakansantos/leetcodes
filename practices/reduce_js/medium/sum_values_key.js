const items = [
  { category: "fruits", value: 100 },
  { category: "vegetables", value: 80 },
  { category: "fruits", value: 150 },
  { category: "grains", value: 200 },
  { category: "vegetables", value: 120 },
];
// { fruits: 250, vegetables: 200, grains: 200 }

const calculateSum = (array) => {
  const result = array.reduce((acc, { category, value }) => {
    if (!acc[category]) {
      acc[category] = 0;
    }

    acc[category] += value;

    return acc;
  }, {});

  return result;
};

console.log(calculateSum(items));
