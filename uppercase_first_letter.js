function capitalizeFirstLetter(sentence) {
  return sentence
    .split(/\s+/)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeFirstLetter("this is a sentence"));
