/*#1 */
console.log("#2.1: Given the string 'aaa @ bbb @ ccc'. Replace all @ with '!'.\nResult: " + strReplacer('aaa @ bbb @ ccc', '@', '!'));
function strReplacer(str, from, to) {
  return str.replace(new RegExp(from, 'gm'), to);
}

/*#2 */
console.log('#2.2: Write a function that converts a string to an array of words.\nResult: ' + 
toWrodsArray("Lorem Ipsum is simply dummy text of the printing and typesetting industry."));
function toWrodsArray(str) {
  return str.split(' ');
}

/*#3 */
console.log("#2.3 Given the line 'I-know-javascript!'. Replace all with '!'\nResult: " + strToAlerts('I-know-javascript!', '!'));
function strToAlerts(str, to) {
  return str.replace(/./gm, to);
}

/*#4 */
console.log("#2.4 Given an array ['I', 'know', 'javascript', '!']. Use the join method to convert the array to the string 'I learning javascript +!'. And make the first letter capitalized." +
'\nResult: ' + arrToStr(['I', 'know', 'javascript', '!']));
function arrToStr(arr) {
  return arr[0].toUpperCase() + arr.join(' ').slice(1);
}

/*#5 */
console.log('Write a function that takes a string and determines whether it is a polyndrome\n Result: ' + polindrome('Taco cat'));
function polindrome(str) {
  return [...str.toLowerCase().replace(' ', '')].every((symbol, i, arr) => {
    if (arr.length % 2 === 0 && arr.length / 2 === i) return true;
    return symbol === arr[arr.length - i - 1];
  });
}
