// initial
// const generateAsterisk = (string) => {
//   let result = "";

//   for (let i = 0; i < string.length; i++) {
//     result += "*";
//   }

//   return result;
// };

// but now we can use replace
const generateAsterisk = (string) => {
  let asterisk = "*";

  return asterisk.repeat(string.length);
};

const maskString = (string) => {
  const firstLetter = string.slice(0, 1);
  const middleLetters = string.slice(1, string.length - 1);
  const lastLetter = string.slice(string.length - 1);

  const result = `${firstLetter}${generateAsterisk(
    middleLetters
  )}${lastLetter}`;

  return result;
};

console.log(maskString("ThisIsTesting"));
