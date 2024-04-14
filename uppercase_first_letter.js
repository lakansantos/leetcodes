function capitalizeFirstLetter(sentence) {
  sentence.trim(); // trim the  sentence

  let result = "";
  [sentence].forEach((element) => {
    // make it an array to be iterated
    element.split(" ").map((el) => {
      // split each element then iterate then get the first word of each splitted element
      result += el[0].toUpperCase() + el.slice(1, el.length) + " ";
    });
  });
  return result;
}

console.log(capitalizeFirstLetter("this is a sentence"));
