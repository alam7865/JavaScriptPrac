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
// const p = new Promise((resolve, reject) => {
//   resolve("Resolved Promise Data");
// });

// // console.log(p);
// // p.then((x) => {
// //   console.log(x);
// // });

// function getData() {
//   return p;
// }

// const data = getData();
// data.then((x) => {
//   console.log(x);       // Resolved Promise Data
// });

///////////////////////////////////////////////////////////////

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello Alam Bhai");
//   }, 5000);
// });

// async function getData() {
//   return await p;
// }

// const data = getData();
// data
//   .then((x) => {
//     console.log(x);       // Hello Alam Bhai     after 5 ms
//   })
//   .catch((err) => {
//     console.log("Error: " + err.mesage);
//   });

///////////////////////////////////////////////////

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello Resolved Promise");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello Resolved Promise");
  }, 10000);
});

async function getdata() {
  console.log("First Promise p1");
  const data1 = await p1;
  console.log(data1);

  console.log("Second Promise P2");
  const data2 = await p2;
  console.log(data2);
}

getdata();
