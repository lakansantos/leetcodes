/**
 * Print a pyramid
 *         *
 *        * *
 *       * * *
 *      * * * *
 */

const printPyramid = (rows) => {
  for (let i = 0; i < rows; i++) {
    let result = "";

    for (let j = 0; j < rows - i; j++) {
      result += " ";
    }

    for (let k = 0; k < i + 1; k++) {
      result += "* ";
      if (i === 1) {
        result = "   [ * ] ";
      }
      if (i === 3) {
        result = "  [ *** ]  ";
      }
    }

    console.log(result);
  }
};

printPyramid(5);
