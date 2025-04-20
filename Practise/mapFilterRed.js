// let arr = [1, 2, 3, 4, 5];
// function multiply(x) {
//   return x * 2;
// }

// let res = [];
// res = arr.map((x) => {
//   return multiply(x);
// });

// console.log(res);

//////////////////////////////////////////////////////////////////////

// let res = [5, 9, 10, 12, 7, 8, 2];
// let output = [];

// function filter(x) {
//   if (x >= 10 && x < 20) {
//     return x;
//   }
// }

// output = res.filter((x) => {
//   return filter(x);
// });

// console.log(output);

/////////////////////////////////////////////////////////////

let res = [1, 2, 3, 4, 5, 6];

// function calSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum;
// }

// let ans = calSum(res);
// console.log(ans);

// let output = res.reduce((acc, curr) => {
//   acc += curr;
//   return acc;
// }, 0);

// console.log(output);

///////

let output = res.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }

  return acc;
}, 0);

console.log(output);
