console.log("#4.1 Given 2 arrays: ['a', 'b', 'c'] and [1, 2, 3]. Combine them into one. Add elements 111 to it at the end.\nResult: " + arrayCompain(['a', 'b', 'c'], [1, 2, 3]));
function arrayCompain(a, b) { return [...a, ...b] };
console.log('#4.2 Given an array [1, 2, 3]. Make an array of it [3, 2, 1] \nResult: ' + arrrayReverse([1,2,3]));
function arrrayReverse(arr) { return arr.reverse() };

let givenArr = ['learn', 'css', 'nodejs'];
let givennArrCopy = [...givenArr];
console.log(
  "#4.3 Given an array ['learn', 'css', 'nodejs']. Use shift, pop to display the first and last element." +
    "Create new array which have two elements ['learn', 'nodejs'].\nResult: " +
    `${givenArr.shift()} ${givenArr.pop()}, ${givennArrCopy.filter( (val) => val !== givenArr[0])}`
);

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [5, 6, 7, 8, 9];
console.log("#4.4 Given the 2 arrays: [1,2,3,4,5,6] and [5,6,7,8,9]. Find all unique elements.\nResult: " + uniqueArr(arr1, arr2));
function uniqueArr(arr1, arr2) {
  let unique1 = arr1.filter((o) => arr2.indexOf(o) === -1);
  let unique2 = arr2.filter((o) => arr1.indexOf(o) === -1);
  return unique1.concat(unique2);
}

objForSplice = { js: 'test', jq: 'hello', css: 'world' };
const objKeys = Object.keys(objForSplice);
const objVals = objKeys.map((el) => objForSplice[el]);
console.log("#4.5 Given object {js: 'test', jq: 'hello', css: 'world'}. Get an array of its keys, and an array of its value.\nResult: " + 
`keys: ${objKeys}, vals: ${objVals}`);