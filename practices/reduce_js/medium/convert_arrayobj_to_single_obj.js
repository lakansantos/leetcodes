const keyValuePairs = [
  { key: "name", value: "Alice" },
  { key: "age", value: 25 },
  { key: "job", value: "Developer" },
];

// outcome
// { name: 'Alice', age: 25, job: 'Developer' }

const convertToSingleObject = (array) => {
  return array.reduce((acc, { key, value }) => {
    if (!acc[key]) {
      acc[key] = {};
    }
    acc[key] = value;
    return acc;
  }, {});
};

console.log(convertToSingleObject(keyValuePairs));
