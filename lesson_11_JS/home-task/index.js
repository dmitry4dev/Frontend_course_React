// Task 1

function showName(name) {
  console.log(`Hello ${name}`);
}

showName('Витя');

// Task 2

function numberMultiply(num) {
  return num * 10;
}

console.log(numberMultiply(10));

// Task 3

const myCar = {
  make: 'Honda',
  model: 'Civic',
  info: {
      color: 'red',
      mileage: 10000,
      isPopular: true
  },
  year: 2020
}

function showProperties(obj) {
  console.log(obj.make);
  console.log(obj.model);
  console.log(obj.info.color);
  console.log(obj.info.mileage);
  console.log(obj.info.isPopular);
  console.log(obj.year);
}

showProperties(myCar);

// Task 4

const increaseMileage = (obj) => {
  obj.info.mileage += 5000;
}

increaseMileage(myCar);
console.log(myCar.mileage);

// Task 5

const array = [1, 2, 3, 4, 5];

function addToArray(arr, num) {
  arr.push(num);
}

addToArray(array, 6);

// Task 6

const mixedArray = [134, 'Hello', true, {a: 10, b: 20}, null, [1, 2, 3], 'Hero'];

const showArrayElement = (arr) => {
  arr.forEach(elem => {
    console.log(elem, typeof elem);
  });
}

showArrayElement(mixedArray);

// Task 7

const personArray = ['Jack', 'Smith', 30, {salary: 2000, employement: true}];

function showString(arr) {
  const str = `This is ${arr[0]} ${arr[1]}. He is ${arr[2]} years old. It is ${arr[3].employment} that he is employed and his salary is ${arr[3].salary} euro`;
  console.log(str);
}

showString(personArray);

// Task 8

const numberPairs = [[2, 5], [3, 2], [6, 7], [3, 4], [5, 3]];

const numbersExponent = (arr) => {
  arr.forEach(elem => {console.log(elem[0] ** elem[1])});
}

numbersExponent(numberPairs);