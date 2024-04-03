var wordPattern = function (pattern, words) {
  const splitWords = words.trim().split(" ");
  if (pattern.length !== splitWords.length) {
    return false;
  }
  const obj = {};
  // hashmap is the key
  for (let i = 0; i < pattern.length; i++) {
    obj[pattern[i]] = splitWords[i];
  }

  let newString = "";
  let newPattern = "";
  for (let i = 0; i < splitWords.length; i++) {
    newPattern += Object.keys(obj).find((key) => obj[key] === splitWords[i]);
    newString += pattern[i];
  }

  return newString === newPattern;
};

console.log(wordPattern("abbac", "cat dog dog cat she"));

// iterate pattern
// iterate words then compare
