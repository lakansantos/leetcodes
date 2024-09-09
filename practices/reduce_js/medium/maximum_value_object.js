const scores = [
  { name: "Alice", score: 82 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 88 },
  { name: "David", score: 0 },
];

// result should be 'Bob'

// non-reduce way

// const findMax = (array) => {
//   const hasMaxScore = scores.find(
//     (score) =>
//       score.score ===
//       Math.max(
//         ...scores.map((score) => {
//           return score.score;
//         })
//       )
//   );

//   return hasMaxScore.name;
// };

// console.log(findMax(scores));

// previous na naisip ko
// check muna kung mas malaki score
// kung mas malaki, push, kung mas maliit wag ipush
// yung matitira yun yung pinakamalaki

// bagong naisip
// ipush lahat sa array yung score, then math.max
// then check kung sino yung  may ganong score
// return name

const getHighestScore = (scoresData) => {
  const result = scoresData.reduce((acc, cur) => {
    return !acc.score || cur.score > acc.score ? cur : acc;
  }, {});

  return result.name;
};

console.log(getHighestScore(scores));
