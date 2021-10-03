'use strict';

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
console.log('numberOfFilms: ', numberOfFilms);



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let lastMovieTitle = prompt("Один из последних просмотренных фильмов?", "");
    if (lastMovieTitle === "" || lastMovieTitle === null || lastMovieTitle.length > 50) {
        i--;
    } else {
        let grade = prompt("На сколько вы его оцените?", "");
        personalMovieDB.movies[`${lastMovieTitle}`] = grade;
    }
}

if (personalMovieDB.count <= 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
}else if (personalMovieDB.count > 30) {
    alert("Вы настоящий киноман!");
} else { 
    alert("Произошла ошибка");
}
console.log(personalMovieDB);