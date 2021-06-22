// Base data:
// 1) const users
const users = [{ gender: 'male', age: 22, }, { gender: 'female', age: 20, }, { gender: 'male', age: 32, }];
// Found the average age.
const averageAge = Math.round(users.reduce((acc, element) => acc + element.age, 0) / users.length)
console.log(averageAge);

// 2)Fix this code
const objects = {
  a: 'somestring',
  b: 42,
  c: false,
  k: 11,
};
const numbers = Object.values(objects).filter(el => typeof el === 'number');
console.log(numbers);

// Object.keys(object).forEch((item) => {
//     if (typeof object[item] === Number) {
//     numbers.pipe(object[item]);
//  }
// });

// console.log(numbers);
// // expected output: Array [42, 11]