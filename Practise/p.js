// const obj = {
//   key1: ["value1", "value2", "value3", "value4"],
//   key2: ["value5", "value6", "value7", "value8"],
// };

// for (const key in obj) {
//   //   key +
//   //     " " +
//   obj[key].forEach((element) => {
//     console.log(key + " " + element);
//   });
// }

///////////////////////////////////////////////////////////////////
// const obj = {
//   key1: ["value1", "value2", "value3", "value4", "value5"],
//   key2: ["value6", "value7", "value8", "value9", "value10"],
// };

// for (key in obj) {
//   obj[key].forEach((elem) => {
//     console.log(key + " " + elem);
//   });
// }

// Q)print for element n=5

// let n = 5;
// for (let i = 0; i < 5; i++) {
//   let line = "";
//   for (let j = 0; j < i; j++) {
//     line += i;
//   }
//   console.log(line);
//   //   console.log();
// }

// for (let i = 5; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += j;
//   }
//   console.log(line);
// }

// /////////////////

// for (let i = 1; i <= 5; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += j;
//   }
//   console.log(line);
// }

// const arr = [
//   ["i1v1", "i1v2", "i1v3", "i1v4", "i1v5"],
//   ["i2v1", "i2v2", "i2v3", "i2v4", "i2v5"],
//   ["i3v1", "i3v2", "i3v3", "i3v4", "i3v5"],
//   ["i4v1", "i4v2", "i4v3", "i4v4", "i4v5"],
//   ["i5v1", "i5v2", "i5v3", "i5v4", "i5v5"],
// ];

// for (let i = 0; i < arr.length; i++) {
//   let line = "";
//   for (let j = 0; j < arr[0].length; j++) {
//     if (i === j) {
//       line += arr[i][j];
//     } else {
//       line += " ";
//     }
//     console.log(line);
//   }
// }

// ///////////////////    Array Find Function  //////////////////////////

// const library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Walter Isaacson",
//     title: "Steve Jobs",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// let output = library.filter((elem) => {
//   if (elem.readingStatus === true) {
//     return elem;
//   }
// });

// console.log(output);

// let newArr = [];

// library.filter((elem) => {
//   if (elem.readingStatus === true) {
//     newArr.push(elem);
//   }
// });

// console.log(newArr);

///////////////   hosting in javaScript //////////////////////////

// fun();
// console.log(x);
// console.log(fun);

// var x = 7;
// function fun() {
//   console.log("Hello Sabaz Alam");
// }

// //////////////////////////

// var x = 1;
// a();
// b();

// console.log(x);
// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }

// ////////////////////////////////////
// var a = 10;
// function b() {
//   let x = 100;
//   console.log(x);
// }
// console.log(window.a);
// console.log(this.a);
// console.log(a);
// console.log(x);

// //////////////////////////////////////////////////////////////
// function a() {
//   console.log(b);
// }
// var b = 10;
// a();

// //////////////////////////////////////////////////////////////
// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
//   console.log("Namasta JavaScript");
// }
// x();

// function outer() {
//   function inner() {
//     console.log(a);
//   }
//   var a = 10;
//   return inner;
// }
// // outer()();
// var close = outer();
// close();

//////////////////////////////////////
// function outer(b) {
//   function inner() {
//     console.log(a, b);
//   }
//   var a = 10;
//   return inner;
// }

// var close = outer("Hello World");
// close();

//////////////////////////////////////////////

// function outest() {
//   var c = 20;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     // let a = 10;
//     return inner;
//   }
//   return outer;
// }
// // let a = 100;
// var close = outest()("HelloWorld");
// close();

///////////////////////////////////////////////

// function counter() {
//   var count = 0;
//   return function incrementCounter() {
//     count++;
//     console.log(count);
//   };
// }

// var counter1 = counter();
// counter1();
// counter1();

// var counter2 = counter();
// counter2();

// ///////////////////////////////////////////////

// function counter() {
//   var count = 0;
//   this.incrementCounter = function () {
//     count++;
//     console.log(count);
//   };

//   this.decrementCounter = function () {
//     count--;
//     console.log(count);
//   };
// }

// var counter1 = new counter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();

// ////////////////////////////////////////////////
// function a() {
//   var x = 10;
//   var y = 10;
//   return function b() {
//     console.log(x);
//   };
// }

// var ss = a();
// ss();

// var a = function xyz() {
//   console.log("Hello");
// };

// // console.log(a());
// xyz();

// //////////////////////////////////////////////////////////

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

// function attachEventListener() {
//   let count = 0;
//   let btn = document.getElementById("btn");
//   btn.addEventListener("click", function xyz() {
//     console.log("BTN Clicked", ++count);
//   });
// }

// attachEventListener();

let radius = [8, 1, 2, 4];

function calArea(num) {
  return Math.PI * num * num;
}

function calDiame(num) {
  return 2 * num;
}

function calCircum(num) {
  return 2 * Math.PI * num;
}

function calculate(radius, logic) {
  let output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  console.log(output);
}

// calculate(radius, calArea);
// calculate(radius, calDiame);
// calculate(radius, calCircum);

//////////////////////////////////////////////////////////////
// function calculateArea(radius) {
//   let output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }

//   console.log(output);
// }

// function calculateCircumference(radius) {
//   let output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }

//   console.log(output);
// }

// function calDiameter(radius) {
//   let output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   console.log(output);
// }

// calculateArea(radius);
// calculateCircumference(radius);
// calDiameter(radius);

////////////////////////////////////////////////////

// console.log("Start");
// setTimeout(function cb() {
//   console.log("Set Timer");
// }, 5000);
// console.log("End");

////////////////////////////////////////////////////

// Blocking the main Thread

// let startDate = new Date().getTime();
// let endDate = startDate;
// console.log("start");
// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }
// console.log("WhileExpires");

console.log("start");
setTimeout(function cb() {
  console.log("Hello");
}, 0);

console.log("End");
