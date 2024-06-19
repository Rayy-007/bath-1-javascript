// Declaration

/** ----- Greeting ------ */
function greeting() {
  console.log("Hello Min Khant!");
}
// call or invoke
greeting();
greeting();

/** ----- Local Variable ------ */
function getCar() {
  let carName = "BMW";
  console.log("My car is " + carName);
}
getCar();

/** ----- Outer Variable ------ */
let carName = "BMW";

function getCar() {
  console.log("My car is " + carName);
}
getCar();

/** ----- Parameter ------ */
function getCar(carName) {
  console.log("My car is " + carName);
}
getCar("BMW"); // Argument

/** ----- Return ------ */
function sum(num1, num2) {
  console.log("Doing");
  return num1 + num2;
}

let result = sum(2, 4); // 6

console.log(result);

/** ----- Challenge ------ */
function capitalize(userName) {
  let firstLatter = userName.charAt(0).toUpperCase();
  let restLatter = userName.slice(1);
  let finalName = firstLatter + restLatter;

  return finalName;
}

// finalname
console.log(capitalize("kajfef"));
