/*#1 */
console.log('#1.1: Given the variables a = 10 and b = 3. Find the remainder of dividing a by b.\nRsult: ' + remainder(10, 3));
function remainder(a, b) {
  return a % b;
}

/*#2 */
const st = pow(2, 10);
console.log('#1.2: Reduce 2 to 10 degrees. Write the result in the variable st.\nRsult: ' + st);
function pow(base, exp) {
  return Math.pow(base, exp);
}

/*#3 */
console.log('#1.3: Display a random integer from 1 to 100.\nResult: ' + getRandomInteger(1, 100));
function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/*#4 */
const stArr = [12, 15, 20, 25, 59, 79];
console.log('#1.4: Given an array arr. Find the arithmetic mean of its elements. Check the problem on the array [12, 15, 20, 25, 59, 79].\nResult: ' + arithmeticMean(stArr));
function arithmeticMean(arr) {
  return arr.reduce((acc, val) => acc + val) / arr.length;
}

/*#5 */
console.log('#1.5: Write a function that takes the number n and displays in the console a series of Fibonacci to the number n\nResult: ' + fibonacciArray(7).join(', '));
function fibonacciArray(n) {
  if (n === 1) return [0, 1];

  let arr = fibonacciArray(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
};
console.log('--------------------')