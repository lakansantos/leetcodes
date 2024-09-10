const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
  g: 5,
};

// output
// { a: 1, c: 2, e: 3, f: 4, g: 5 }

// get each key
// recursively check each key if it's object
// if it's object, spread it and concat it with other object

const flattenObject = (obj) => {
  return Object.keys(obj).reduce((acc, cur) => {
    if (typeof obj[cur] === "object") {
      return { ...acc, ...flattenObject(obj[cur]) };
    } else {
      acc[cur] = obj[cur];
      return acc;
    }
  }, {});
};

console.log(flattenObject(nestedObject));
