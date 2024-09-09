const sales = [
  { productId: 1, productName: "Laptop", quantity: 2, price: 1000 },
  { productId: 2, productName: "Phone", quantity: 5, price: 500 },
  { productId: 1, productName: "Laptop", quantity: 1, price: 1000 },
  { productId: 3, productName: "Tablet", quantity: 3, price: 700 },
  { productId: 2, productName: "Phone", quantity: 2, price: 500 },
  { productId: 2, productName: "Phone", quantity: 2, price: 500 },
];

/* 
output should be like this
 {
  '1': { productName: 'Laptop', total_sales: 3000 },
  '2': { productName: 'Phone', total_sales: 3500 },
  '3': { productName: 'Tablet', total_sales: 2100 }
}
*/

const result = sales.reduce(
  (acc, { productId, productName, quantity, price }) => {
    const total_sales = quantity * price;
    if (!acc[productId]) {
      acc[productId] = {
        productName,
        total_sales: 0,
      };
    }

    acc[productId].total_sales += total_sales;
    return acc;
  },
  {}
);

console.log(result);
