// async function getdata() {
//   return "Namaste";
// }
// const data = getdata();

// console.log(data);

////////////////////////////////////////////

// const github =
//   "https://raw.githubusercontent.com/akshaymarch7/namaste-nodejs/main/data.json";

// const data = fetch(github);
// data
//   .then((res) => res.json())
//   .then((x) => {
//     console.log(x);
//   });

////////////////////////////////////////////
const p = new Promise((resolve, reject) => {
  resolve("Resolved Promise Data");
});

// console.log(p);
// p.then((x) => {
//   console.log(x);
// });

function getData() {
  return p;
}

const data = getData();
data.then((x) => {
  console.log(x);
});
