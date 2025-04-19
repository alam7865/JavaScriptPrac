// function x() {
//   console.log("Namesta");
// }

// function y(x) {
//   console.log("Hello");
//   x();
// }
// y(x);

// let radius = [2, 4, 1, 8];

// function calArea(radius) {
//   let output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   console.log(output);
// }

// function calDiame(radius) {
//   let output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   console.log(output);
// }

// function calCircum(radius) {
//   let output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   console.log(output);
// }

// calDiame(radius);
// // calArea(radius);
// calCircum(radius);

////////////////////////////////////////////////////////////////////////

// function calArea(num) {
//   return Math.PI * num * num;
// }

// function calCircum(num) {
//   return 2 * Math.PI * num;
// }

// function calDiame(num) {
//   return 2 * num;
// }

// function calculate(radius, operat) {
//   let output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(operat(radius[i]));
//   }
//   console.log(output);
// }

// let radius = [2, 4, 1, 8];
// calculate(radius, calCircum);

//////////////////////////////////////////////////////////

// let start = new Date().getTime();
// let endTime = start;

// console.log("Start");

// while (endTime < start + 10000) {
//   endTime = new Date().getTime();
// }

// console.log("While Expires");

///////////////////////////////////////////////////
// console.log("start");
// setTimeout(function cb() {
//   console.log("Hello");
// }, 0);

// console.log("End");

////////////////////////////////////////////////////
// const arr = [5, 1, 3, 2, 6];

// function double(x) {
//   return x * 2;
// }

// function triple(x) {
//   return x * 3;
// }

// function binary(x) {
//   return x.toString(2);
// }
// let output = arr.map(binary);
// let output = arr.map(function double1(x) {
//   return x * 2;
// });

// /////////////////  Array Function ///////////////////////
// let output = arr.map((x) => {
//   return x * 2;
// });
// console.log(output);

////////////////////////// Filter ///////////////////////////
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let output1 = arr1.filter((x) => {
//   return x <= 4;
// });

// console.log(output1);

///////////////////////////// Reduce ////////////////////////

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function calSum(arr2) {
//   let sum = 0;
//   for (let i = 0; i < arr2.length; i++) {
//     sum += arr2[i];
//   }
//   // return sum;
//   console.log(sum);
// }

// calSum(arr2);

// let output = arr2.reduce(function sum(acc, curr) {
//   return (acc += curr);
// }, 0);

////////////////////////////////////////////////////
// let maxs = arr2.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// }, 0);

// console.log(maxs);

//////////////////////////////////////////////////////

// const users = [
//   { firstName: "sabaz", lastName: "Alam", age: 22 },
//   { firstName: "Sohail", lastName: "Alam", age: 16 },
//   { firstName: "Akshnay", lastName: "Sani", age: 75 },
// ];

// // // const output = users.map((x) => x.firstName + " " + x.lastName);
// // // console.log(output);

// // const output = users.filter((x) => x.age < 30).map((x) => x.firstName);
// // console.log(output);

// const output = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   console.log(acc);
//   return acc;
// }, {});

// console.log(output);

////////////////////////////////// practise /////////////////////////////////////

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function double(x) {
  return 2 * x;
}

// let output = arr.map(double);
// let output = arr.map(function double1(x) {
//   return x * 2;
// });

// let output = arr.map((x) => {
//   return x * 2;
// });

// let output = arr.map((x) => {
//   return x.toString(2);
// });
// console.log(output);

//////////////////////////////////////////////////////

// let output = arr.filter((x) => {
//   return x % 2 != 0 && x > 5;
// });

// console.log(output);

//////////////// reduce ///////////////////////////////

// function sum(arr) {
//   let sum1 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum1 += arr[i];
//   }
//   return sum1;
// }

// console.log(sum(arr));

// let ans = arr.reduce(function (acc, curr) {
//   acc += curr;
//   return acc;
// }, 0);

// console.log(ans);

// let ans = arr.reduce(function (acc, curr) {
//   if (curr > acc) {
//     acc = curr;
//   }
//   console.log(acc);
//   return acc;
// }, 0);

// console.log(ans);

//////////////////////////////////////////////////
// Arrays of Obj

// let obj = [
//   { firstName: "sabaz", lastName: "Alam", age: 25 },
//   { firstName: "Akshnay", lastName: "Sani", age: 27 },
//   { firstName: "Sohail", lastName: "Alam", age: 30 },
// ];

// // const output = users.filter((x) => x.age < 30).map((x) => x.firstName);
// // let output = obj.filter((x) => x.age <= 30).map((x) => x.firstName);
// let output = obj.map((x) => x.firstName + " " + x.lastName);

// console.log(output);

/////////////////////////////////////////////////////////

// setTimeout(function () {
//   console.log("Timer");
// }, 5000);
// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
//   console.log("y");
// });

// function x() {
//   console.log("Namesta");
// }

// function y(x) {
//   console.log("Hello");
//   x();
// }

// y(x);

////////////////////////////////////////////////////////

// function attachedEventListener() {
//   let count = 0;
//   document.getElementById("btn").addEventListener("click", function () {
//     console.log("Button Clicked", ++count);
//   });
// }

// attachedEventListener();

// function x() {
//   var x = 7;
//   function y() {
//     console.log(x);
//   }
//   x = 100;
//   return y;
// }

// // let z = x();
// // console.log(z);
// // z();
// x()();

//////////////////////////////////////////////////////////
// function z() {
//   var a = 900;
//   function x() {
//     var b = 121;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }

// z();

// function x() {
//   var i = 1;
//   // setTimeout(function cb() {
//   //   console.log(i);
//   // }, 3000);

//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function cb() {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x();

function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  return y;
}
x()();
