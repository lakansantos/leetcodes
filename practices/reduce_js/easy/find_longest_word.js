const words = ["apple", "banana", "grapefruit", "kiwi"];
// 'grapefruit'

const findLongestWord = (array) =>
  array.reduce((acc, cur) => (cur.length > acc.length ? cur : acc), "");

console.log(findLongestWord(words));
