const fetch = require('node-fetch');
// 1)Create a function that takes 3 numeric values, each of which is placed in a separate promise.
// Increase each number by 1 and return the result of the promises

const NumericPromise = (num) =>
  new Promise((resolve, reject) => {
    if (typeof num !== 'number' || num.toString().length !== 3) {
      reject('number is not 3 numeric');
    }
    resolve(num + 111);
  });

NumericPromise(222)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

// 2)Rewrite as async/await pattern
async function callApi() {
  await fetch('https://api.github.com/orgs/nodejs') //some amazing endpoint
    .then((resp) => resp.body)
    .then((data) => {
      //console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
callApi();

// 3*)Rewrite as Promise.all()
const testPromise = (timeout) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('timing: ' + timeout);
  }, timeout);
});
Promise.all([testPromise(1000), testPromise(3000)]).then(vals => console.log(vals));
