const items = [
  { category: "fruits" },
  { category: "vegetables" },
  { category: "fruits" },
  { category: "dairy" },
];

// output
// ['fruits', 'vegetables', 'dairy']

const createUniqueList = (array) => {
  return array.reduce((acc, { category }) => {
    if (!acc.includes(category)) {
      acc.push(category);
    }

    return acc;
  }, []);
};

console.log(createUniqueList(items));
