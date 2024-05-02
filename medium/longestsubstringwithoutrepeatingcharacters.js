var lengthOfLongestSubstring = function (s) {
  let length = 0;

  const store = {}; // hashmap
  let string = "";
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in store)) {
      store[s[i]] = s[i];
    } else {
    }
  }

  return store;
};

console.log(lengthOfLongestSubstring("pwwkeew"));

// p = p
// pw = w
// pww = w
// a = 1
// ab = 2
// abc = 3
// abcc = 3
// abccc = 3
// abcccd = 3

/**
 * {
 *  a: 'a',
 * b
 * }
 */

// abdddefgc =  9

// abd = 3
// d = 1
// d = 1
// de = 2
// def = 3
// defg = 4
// defgc = 5

// p = 1
// pw = 2
// w = 1
// wk = 2
// wke = 3
// wkew = 3

//

// a = 1
// ab = 2
// abd = 3
// abdd  = 0
// abddd = 1
// abddd  = 1
// abddde  = 2
// abdddef = 3
// abdddefg = 4
// abddefgc = 5
// abdddefgc =
// a = 9
// abdddefgc = 7

// abcabcabc

// a = 1
// ab = 2
// abc = 3
// abc = 3
// abcb = 3

// abddd
// a = 1
// ab = 2
// abd = 3
