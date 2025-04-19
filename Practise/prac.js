// console.log("Hello");
// setTimeout(() => {
//   console.log("Start");
// }, 3000);
// console.log("end");

///////////////// API Call ////////////
// fetch(
//   "https://raw.githubusercontent.com/akshaymarch7/namaste-nodejs/main/data.json"
// )
//     .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// const GITHUB_API =
//   "https://raw.githubusercontent.com/akshaymarch7/namaste-nodejs/main/data.json";

// const user = fetch(GITHUB_API);
// user
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

/////////////////////////////////////////

const github =
  "https://raw.githubusercontent.com/akshaymarch7/namaste-nodejs/main/data.json";
const data = fetch(github);
data
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
