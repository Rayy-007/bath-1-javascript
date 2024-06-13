/* Arithmetic Operators */
const total = 2 + 4; // 6
const total1 = 4 - 2; // 2
const total2 = 2 * 2; // 4
const total3 = 4 ** 2; // 16
const total4 = 8 / 2; // 4
const total5 = 8 % 2; // 0
let number = 3;
const total6 = number++; // 4
const total7 = number--; // 2

/* Assignment Operators */
let number2 = 10;
number2 += 11; // 21

let number3 = 8;
number3 -= 2; // 6

let number4 = 4;
number4 *= 2; // 8

let number5 = 8;
number5 /= 2; // 4

let number6 = 8;
number6 %= 2; // 0

let number7 = 4;
number7 **= 2; // 16

/** Comparison Operators */
// ==
8 == "8"; // true

// ===
21 === "21"; // false

// not qual !=
7 != 7; // false

// not qual and type !==
7 !== "7"; // true

// >
8 > 9; // false

// <
8 < 9; // true

// >=
8 >= 9; // true
8 >= 8; // true

// <=
6 <= 3; // fasle

/* Logical Operators */
// and logical
true && true; // true
7 == 7 && 8 < 9; // true

false && true; // false
7 === "7" && 8 < 9; // false

false && true; // false

// or logical
true || true; // true
2 + 2 == 4 || 2 * 2 == 4; // true

true || false; // true
8 == 8 || 5 % 2 == 0; // true

false || false; // false
8 < 8 || 7 % 2 == 0; // false

//  not logical
!true; // false
let pass = 8;
!pass == 1234; // true

/** String Operator */
let text1 = "20";
let text2 = "5";
let result = text1 < text2;
console.log(result);
// 1 2 3 4 5
