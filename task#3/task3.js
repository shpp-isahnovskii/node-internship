/*#1 */
const objToSentence = {
  js: ['I', 'Angular', 'nodeJS'],
  php: 'love',
  css: 'world',
};
console.log(
  "#3.1: Given object { js: ['I', 'Angular', 'nodeJS'], php: 'love', css: 'world' }. Log the sentence 'I love nodejs' with it.\nResult: " +
    `${objToSentence.js[0]} ${objToSentence.php} ${objToSentence.js[2]}`
);

/*#2 */
const querty = { q: null, w: null, e: null, r: null, t: null, y: null };

console.log(
  '#3.2: Given the object {q: null w: null e: null r: null t: null y: null}  make a string from the keys of this object. (do it in two or more ways).\nResult: ' +
    `${Object.keys(querty).join('')} ${Object.getOwnPropertyNames(querty).join(
      ''
    )} ${(function () {
      let result = '';
      for (let el in querty) {
        result += el;
      }
      return result;
    })()}`
);

/*#3 */
const daysOfWeek = {
  monday: 2,
  tuesday: 8,
  wednesday: 6,
  thursday: 8,
  friday: 7,
};
console.log(
  '#3.3 Create an object in which the key is the days of the week from Monday to Friday (working days of the week)' +
    'and the value is the number from 1-8 (hours of work), then from this object  create two arrays in the first to transfer all' +
    'keys and in the second all values. And calculate total work hours.\nResult:' +
    `${Object.keys(daysOfWeek)} ${Object.values(daysOfWeek)} ${Object.values(
      daysOfWeek
    ).reduce((acc, el) => acc + el, 0)}`
);

/*#4 */
console.log(
  '#2.4 Write a function that compares two objects');
// © copy from Source: https://gist.github.com/nhatnx/3968895014876736ce1f020b8b0d8110

var isEqual = function (value, other) {
  // Get the value type
  var type = Object.prototype.toString.call(value);

  // If the two objects are not the same type, return false
  if (type !== Object.prototype.toString.call(other)) return false;

  // If items are not an object or array, return false
  if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

  // Compare the length of the length of the two items
  var valueLen =
    type === '[object Array]' ? value.length : Object.keys(value).length;
  var otherLen =
    type === '[object Array]' ? other.length : Object.keys(other).length;
  if (valueLen !== otherLen) return false;

  // Compare two items
  var compare = function (item1, item2) {
    // Get the object type
    var itemType = Object.prototype.toString.call(item1);

    // If an object or array, compare recursively
    if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
      if (!isEqual(item1, item2)) return false;
    }

    // Otherwise, do a simple comparison
    else {
      // If the two items are not the same type, return false
      if (itemType !== Object.prototype.toString.call(item2)) return false;

      // Else if it's a function, convert to a string and compare
      // Otherwise, just compare
      if (itemType === '[object Function]') {
        if (item1.toString() !== item2.toString()) return false;
      } else {
        if (item1 !== item2) return false;
      }
    }
  };

  // Compare properties
  if (type === '[object Array]') {
    for (var i = 0; i < valueLen; i++) {
      if (compare(value[i], other[i]) === false) return false;
    }
  } else {
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        if (compare(value[key], other[key]) === false) return false;
      }
    }
  }

  // If nothing failed, return true
  return true;
};
console.log('--------------------');
