const fruits = [
  "Apple",
  "OCC",
  "Mango",
  "Orange",
  "Papaya",
  "Pineapple",
  "Strawberries",
  "Olive",
  "OBB",
];

/** ------ For Each ------  */
// const loppedArray = (item) => {
//   console.log(item);
// };

// fruits.forEach((item) => {
//   return item;
// });
// console.log(returnedForEach);

/** ------ Map ------  */
// const returnedMap = fruits.map((item) => {
//   return item;
// });
// console.log(returnedMap);

/** ------ Filter ------  */
// const returnedFilter = fruits.filter((fruit) => {
//   if (fruit.length < 6) {
//     return fruit; // Apple
//   }
// }); // ["Apple", "Mango", "Olive"]

// console.log(returnedFilter);

/** ------ Find ------  */
// const returnedFind = fruits.find((fruit) => {
//   if (fruit.length < 4) {
//     return fruit;
//   }
// }); // "OCC"

// console.log(returnedFind);

/** ------ Reduce ------  */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = numbers.reduce((total, num) => {
  return total - num;
}, 0);

console.log(sum);
