/** If --> Else */

// const userName = "Min";
// const userEmail = "min@gmail.com";
// const userPass = 1244;

// if (userEmail == "min@gmail.com") {
//   console.log("User email is Correct!");

//   if (userPass == 1244) {
//     console.log("Login In Sucessful!");
//   } else {
//     console.log("User pass is wrong!");
//   }
// } else {
//   console.log("User email is wrong!");
// }

// if (condition1) {
//   // code
// } else if (condition2) {
//   // code
// } else if (condition3) {
//   // code
// } else if (condition4) {
//   // code
// } else {
//   //code
// }

/**
 * Switch
 */

// const userInput = "5";

switch (7 == 8) {
  case "ture":
    console.log("This is Monday");
    break;

  case "Tueday":
    console.log("This is Tueday");
    break;

  case "Wed":
    console.log("This is Wed");
    break;

  case "Thur":
    console.log("This is Thur");
    break;

  case 5:
    console.log("This is Fri");
    break;

  case "Sat":
  case "Sun":
    console.log("This is weekend!");
    break;

  default:
    console.log("This is default day");
}

/**
 * Tenary
 */
let result2;

if (7 === 8) {
  result2 = 10;
} else {
  result2 = 60;
}

let resultFinal = 7 === 8 ? 10 : 60;

console.log(resultFinal);

/**
 * Shopping Discount
 */
let discount = 0;
let amount = 30;

if (amount >= 100) {
  discount = 20;
} else if (amount >= 50) {
  discount = 10;
}

console.log("You have discount" + discount + "%");

let number1 = 3;
let number2 = 6;
