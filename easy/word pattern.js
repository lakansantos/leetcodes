var wordPattern = function (pattern, words) {
  const splitWords = words.trim().split(" ");
  if (pattern.length !== splitWords.length) {
    return false;
  }
  const obj = {};
  // hashmap is the key

  let newString = "";
  for (let i = 0; i < splitWords.length; i++) {
    obj[pattern[i]] = splitWords[i];
  }
  for (let i = 0; i < splitWords.length; i++) {
    newString += Object.keys(obj).find((key) => obj[key] === splitWords[i]);
  }
  return newString === pattern;
};

console.log(wordPattern("aaaa", "dog cat dog cat"));

// iterate pattern
// iterate words then compare
