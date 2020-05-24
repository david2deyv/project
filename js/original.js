
"use strict";
// Задача 1
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
// console.log(numberOfFilms);

// Задача 2
const personalMovieDB = {
  count: `${numberOfFilms}`,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};


for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?"),
        b = prompt("На сколько оцените его?");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("Done!");
  } else {
    console.log("Error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}
 
console.log(personalMovieDB);

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

console.log(personalMovieDB);

const a = prompt("Один из последних просмотренных фильмов?"),
      b = prompt("На сколько оцените его?"),
      c = prompt("Один из последних просмотренных фильмов?"),
      d = prompt("На сколько оцените его?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

