// const randomNum = () => {
//   return Math.floor(Math.random() * 1000);
// };

// // js object
// // let items = [
// //   {
// //     id: 1,
// //     name: "Burger",
// //     quantity: 1,
// //   },
// // ];

// // console.log(items);

// // items = [
// //   {
// //     id: randomNum(),
// //     name: "Burger",
// //     quantity: 1,
// //   },
// //   {
// //     id: randomNum(),
// //     name: "Burger Benjo",
// //     quantity: 1,
// //   },
// // ];

// // update quantity
// // items[0].quantity = 10;
// // console.log(items);

// // store in localStorage

// // let cart =

// // baru
// let data = [];

// let myItems = {
//   attribute1: 1,
//   attribute2: 1,
// };

// function initItem(att1, att2) {
//   myItems.attribute1 = att1;
//   myItems.attribute2 = att2;

//   localStorage.setItem("item", JSON.stringify(myItems));
//   storeInLS();
// }

// function storeInLS() {
//   let fromLS = JSON.parse(localStorage.getItem("item"));

//   // push to data then store in LS
//   data.push(fromLS);
//   // console.log(data);
//   // console.log(fromLS);
//   localStorage.setItem("data", JSON.stringify(data));
// }

// // console.log(fromLS);

// // let dataLS = JSON.parse(localStorage.getItem("item"));
// // console.log(dataLS[0].price);

// // let data = [];

// // let myItems = {
// //   attribute1: 1,
// //   attribute2: 1,
// // };

// // function initItem(att1, att2) {
// //   myItems.attribute1 = att1;
// //   myItems.attribute2 = att2;

// //   // store in temp
// //   localStorage.setItem("item", JSON.stringify(myItems));
// //   storeInLS();
// //   // remove
// //   localStorage.removeItem("item");
// // }

// // function storeInLS() {
// //   let itemLS = JSON.parse(localStorage.getItem("item"));
// //   let dataLS = JSON.parse(localStorage.getItem("data"));

// //   // push to data then store in LS
// //   if (dataLS !== null) { // klau ada
// //     dataLS.push(itemLS);
// //     localStorage.setItem("data", JSON.stringify(dataLS));
// //   } else {
// //     data.push(itemLS);
// //     localStorage.setItem("data", JSON.stringify(data));
// //   }
// // }

// let students = [
//   { id: "001", name: "Anish", sports: "Cricket" },
//   { id: "004", name: "Smriti", sports: "Basketball" },
//   { id: "003", name: "Rahul", sports: "Cricket" },
//   { id: "004", name: "Bakul", sports: "Basketball" },
//   { id: "005", name: "Nikita", sports: "Hockey" },
// ];

// let filterName = students
//   .filter((student) => student.id == 003)
//   .map((student) => console.log(student.name));

// console.log(filterName);

// // let filterStudent = students
// //   .filter((student) => student.id == 004)
// //   .map((student) => console.log(student.name));
// // console.log(filterStudent);

// let btn = document
//   .getElementsByClassName("input1")[0]
//   .addEventListener("change", function () {
//     let input = document.getElementsByClassName("input1")[0].value;
//     let item = {
//       number: input,
//     };
//     console.log(item);
//     localStorage.setItem("input", JSON.stringify(item));
//   });
