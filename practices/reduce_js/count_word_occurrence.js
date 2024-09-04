const sentence =
  "reduce is a powerful method in JavaScript reduce can be used to manipulate arrays reduce is awesome";

// not reduce way
// const container = {};
// const a = sentence.split(" ").map((text) => {
//   if (typeof container[text] === "number") {
//     container[text] += 1;
//   } else {
//     container[text] = 1;
//   }
// });

const result = sentence.split(" ").reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(result);
