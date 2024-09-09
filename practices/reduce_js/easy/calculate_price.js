const items = [
  { price: 10, quantity: 2 },
  { price: 20, quantity: 1 },
  { price: 5, quantity: 5 },
];

// output -  65 (2*10 + 1*20 + 5*5)

const calculatePrice = (array) =>
  array.reduce((acc, { price, quantity }) => (acc += price * quantity), 0);

console.log(calculatePrice(items));
