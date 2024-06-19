const car = {
  model: "2017",
  isNew: true,
  brand: "BMW",
  colors: ["red", "blue", "orange"],
  drive: function () {
    console.log(this.brand + " Driving....");
  },
};

delete car.brand;

console.log(car);

const salaries = {
  John: 100,
  Anna: 100,
  Amma: 100,
};

salaries["aung"] = 100;

console.log(salaries);

let sumOfSalaries = salaries.John + salaries.Amma + salaries.Anna;
console.log(sumOfSalaries);
