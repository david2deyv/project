"use strict";
// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('error!');
// }

// if (num < 49) {
//     console.log('Error!');
// } else if (num > 100) {
//     console.log('Много!');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error!');

// const num = 41;

// switch (num) {
//     case 49:
//         console.log('Неверно!');
//         break;
//     case 100:
//         console.log('Неверно!');
//         break;
//     case 50:
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз!');
// }

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for(let i = 1; i < 8; i++){
// if (i === 6) {
//     break;
//     continue;
// }

//     console.log(num)
// }
// let num = 20;

// function showFirstMassage (text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMassage("Hello World!");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 2));

// function ret() {
//     let num = 50;

//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// let logger = function () {
//     console.log('Hello!');
// };
// logger();

// const calc = (a, b) => a + b;

// const str = "text";

// // console.log(str[2] = 'd');

// // console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello World!";

// // console.log(logg.slice(6, 12));

// // console.log(logg.substring(6, 12));

// console.log(logg.substr(6, 12));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// // console.log(parseInt(test));
// console.log(parseFloat(test));

// function first() {
//     // Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {

// }

// learnJS('JavaScript', function() {
//     console.log('Я прошел єтот урок!');

// });

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest: function() {
//         console.log("Test");
//   }

// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);
// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }
// // console.log(counter);

// const arr = [1, 2, 3, 6, 8];
// arr.sort(comparenNum);
// console.log(arr);

// function comparenNum(a, b) {
//   return a - b;
// }
// // arr[99] = 0;

// // console.log(arr.length);
// // console.log(arr);

// arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} внутри масива ${arr}`);
// });

// // // arr.pop();
// // arr.push(10);

// // console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// for (let value of arr) {
//   console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj; //Ссылка

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(main) {
//   let objCopy = {};

//   let key;
//   for (key in main) {
//     objCopy[key] = main[key];
//   }

//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//   d: 17,
//   e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();

// newArr[1] = 'kjhkjgg';
// console.log(newArr);
// console.log(oldArr);

// const video = ['youthub', 'vimeo', 'rutube'],
//       blogs = ['www', 'ddd', 'ggg'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

//     console.log(internet);

//     function log(a, b, c) {
//       console.log(a);
//       console.log(b);
//       console.log(c);
//     }

//     const num = [2, 5, 7];

//     log(...num);

//     const array = ["a", "b"];

//     const newAaray = [...array];

//     const q = {
//       one: 1,
//       two: 2
//     };
//     const newObj = {...q};
//     console.log(newObj);

// let str = "some";
// let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// // console.dir([1, 2, 3]);


// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function() {
//     console.log("Hello");
//   }
// };
// const jonh = Object.create(soldier);

// // const jonh = {
// //   health: 100
// // };

// // jonh.__proto__ = soldier;

// // Object.setPrototypeOf(jonh, soldier);
 

// // console.log(jonh.armor);
// jonh.sayHello();