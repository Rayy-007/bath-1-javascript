/** Object */
const person = {
  // key : value,
  name: "Min",
  age: 20,
  city: "MDY",
  do: function () {
    console.log(this.name + " is walking...");
  },
};

person.name = "Khant";

//  calling Method
person.do();

// dot notation
console.log(person.name);

// bracket notation
console.log(person["age"]);

/** ------------------------------------------------- */

/** Array */
const colors = ["red", "green", "orange", "yellow"];

// index
console.log(colors[4]);

/** ------------------------------------------------- */

/** Nested Array and Object */
const car = {
  name: "BWM",
  model: 2017,
  colors: ["blue", "green", "orange"],
  isNew: true,
  drive: function () {
    console.log("Car is driving.....");
  },
  company: {
    companyName: "Toyota",
    city: "Japan",
  },
};

console.log(car.company.companyName);

/** ------------------------------------------------- */
const people = ["Min Khant", 22, { gender: "Male", city: "MDY" }];

console.log(people[2].city);
