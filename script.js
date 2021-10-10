/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"
*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastMovieTitle = prompt("Один из последних просмотренных фильмов?", "");
        if (lastMovieTitle === "" || lastMovieTitle === null || lastMovieTitle.length > 50) {
            i--;
        } else {
            let grade = prompt("На сколько вы его оцените?", "");
            personalMovieDB.movies[`${lastMovieTitle}`] = grade;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel(params) {
    if (personalMovieDB.count <= 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    }else if (personalMovieDB.count > 30) {
        alert("Вы настоящий киноман!");
    } else { 
        alert("Произошла ошибка");
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++){
        let genre = +prompt(`Ваш любимый жанр под номером - ${i + 1}`);
        if (genre == '' || genre == null) {
            i--;
        } else {
            personalMovieDB.genres[i] = genre;
        }
    }
}
writeYourGenres();


function showMyDB(param) {
    if (!param) {
        console.log(personalMovieDB);
    } else {
        console.log("Unable to watch");
    }
}

detectPersonalLevel();
showMyDB(personalMovieDB.privat);