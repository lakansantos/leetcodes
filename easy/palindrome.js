var isPalindrome = function (x) {
  if (x < 0) return false;
  const string = x.toString();

  return string.split("").reverse().join("") === x.toString();
};

console.log(isPalindrome(121));
