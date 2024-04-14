function capitalizeFirstLetter(sentence) {
  return sentence
    .trim()
    .split(/\s+/) // removes whitespaces
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeFirstLetter("this is a      sentence"));
