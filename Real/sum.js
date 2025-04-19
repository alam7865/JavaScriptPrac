console.log("Sum module Exported");
var x = "Hello world";
function calculatesum(a, b) {
  const sum = a + b;
  console.log(sum);
}

// module.exports = calculatesum;

module.exports = {
  x: x,
  calculatesum: calculatesum,
};
