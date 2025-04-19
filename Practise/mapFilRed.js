// const arr = [5, 1, 3, 2, 6];

// // Double
// function double(x) {
//   return x * 2;
// }

// // Triple
// function triple(x) {
//   return x * 3;
// }

// // Binary
// function binary(x) {
//   return x.toString(2);
// }
// const ans = arr.map(binary);
// console.log(ans);

////////////// function writing in two ways  //////////////
// let arr = [1, 2, 3, 4];

// // 1) way
// // function binary(x) {
// //   return x.toString(2);
// // }

// // 2) second
// // const output = arr.map(function binary(x) {
// //   return x.toString(2);
// // });

// // 3) third way
// const output = arr.map((x) => {
//   return x.toString(2);
// });
// // const output = arr.map(binary);
// console.log(output);

//////////////////////  Filter ///////////////
// let arr = [5, 1, 3, 2, 6];

// // isOdd
// function isOdd(x) {
//   return x % 2 != 0;
// }

// // isEven
// function isEven(x) {
//   return x % 2 === 0;
// }
// // const output = arr.filter(isOdd);     // [ 5, 1, 3 ]
// const output = arr.filter(isEven);
// console.log(output);

////////////////////  reduce ////////////////////
// let arr = [5, 1, 3, 2, 6];
// // const ans = arr.reduce(function (acc, curr) {
// //   acc += curr;
// //   return acc;
// // }, 0);

// // console.log(ans);

// // max number
// const ans = arr.reduce(function (acc, curr) {
//   if (acc < curr) {
//     acc = curr;
//   }

//   return curr;
// }, 0);

// console.log(ans);

////////////////////////// Array of object /////////////
const users = [
  { firstName: "Sabaz", lastname: "Alam", age: 26 },
  { firstName: "Shohail", lastname: "Alam", age: 25 },
  { firstName: "Abdul", lastname: "Kalam", age: 35 },
];

// const output = users.map((x) => x.firstName + " " + x.lastname);
// console.log(output);

//print name of people whose age is greater then 25;
// const output = users
//   .filter((x) => {
//     if (x.age > 25) {
//       return x;
//     }
//   })
//   .map((x) => {
//     x.firstName + " " + x.lastname;
//     return x;
//   });

// const output = users.filter((x) => x.age < 30).map((x) => x.firstName);
// console.log(output);

////////////////////////   frequency of ages ////////////////////////////
const output = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output);
