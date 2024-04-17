function isValid(s) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") {
      arr.push("]");
    } else if (s[i] === "{") {
      arr.push("}");
    } else if (s[i] === "(") {
      arr.push(")");
      // i still don't understand
    } else if (s[i] !== arr.pop()) {
      return false;
    }
  }

  return !arr.length;
}

console.log(isValid("[][]()]"));
