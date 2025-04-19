require("./xyz.js");
// const calculatesum = require("./sum.js");
// export as obj
// const obj = require("./sum.js");
const { calculatesum, x } = require("./sum.js");
var name = "Namaste Nodejs";
var a = 10;
var b = 20;

// obj.calculatesum(a, b);
// console.log(obj.x);
// console.log(globalThis === global);
calculatesum(a, b);
console.log(x);
