const fruits = ["Apple", "Orange", "Banana"];
fruits[3] = "Mongo";

/** ----- Push ------ */
fruits.push("Mongo"); // add new elements at the --> end

/** ----- Pop ------ */
fruits.pop(); // removew elements at the --> end

/** ----- shift ------ */
fruits.shift(); // remove new elements at the --> satrt

/** ----- unshift ------ */
fruits.unshift("Mango"); // add new elements at the --> start

/** ----- Slice ------ */
let slicedArray = fruits.slice(2, 4); // return ["Banana", "Mango"]

/** ----- Includes ------ */
let hasFruit = fruits.includes("Orange"); // ture or false

/** ----- IndexOf ------ */
fruits.indexOf("Banana"); // return index number of Banana --> 3

/** ----- Sort ------ */
fruits.sort(); // sorted A -> B -> C

/** ----- Join ------ */
fruits.join("-"); // return a string by joing with " - " --> Apple-Banana

/** ----- Concat ------ */
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let newArray = arr1.concat(arr2); // return [1,2, 3, 4, 5, 6]

/** ------------------------------------ End Of Array Methods ---------------------------------- */

/** ----- Destructuring ------ */
const user = {
  name: "Min",
  age: 22,
  email: "min@gmail.com",
  password: 2121,
};

let { name, age, email } = user; // Destructuring

// OLD WAY
let userName = user.name;
let useEmail = user.email;
let useAge = user.age;
