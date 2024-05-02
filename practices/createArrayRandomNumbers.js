const createArrayRandomNumbers = (length) => {
  const minimum = 360;
  const maximum = 700;
  return Array.from({ length }, () =>
    Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
  );
};

console.log(createArrayRandomNumbers(5));
